const {
  BIG_INT_MINUS_TWO,
  BIG_INT,
  ONE_DAY_IN_SECONDS,
  currentTimestamp,
  randomTime,
  randomInt,
} = require('@digix/contest/lib/helpers');

const Contest = require('@digix/contest').default;
const Tempo = require('@digix/tempo').default;
new Tempo(web3).then((i) => {global.tempo = i});
const Boilerplate = artifacts.require('./Boilerplate.sol');

contract('Boilerplate', function(accounts) {
  new Contest({timeout: 200000})

  .artifact(Boilerplate)
  .describe('add(x,y) with random values')
  .call('add', 'Add two unsigned integers safely',
    Array.apply(null, {length: 5}).map(() => {
      const x = randomInt(1, 5);
      const y = randomInt(1, 5);
      const result = x + y;
      return [[x, y], [result]]
    })
  )
  .describe('subtract(x,y) with random values')
  .call('subtract', 'Subtract two unsigned integers safely',
    Array.apply(null, {length: 5}).map(() => {
      const x = randomInt(500, 99999);
      const y = randomInt(1, 499);
      const result = x - y;
      return [[x, y], [result]]
    })
  )
  .describe('subtract(x,y)')
  .call('subtract', 'Subtract two unsigned integers safely', [
    [[4, 3], [1]]
  ])
  .describe('fire_an_event')
  .watch('FireEvent', 'fire_an_event should trigger FireEvent', [
    {_id: 3},
    {_id: 47}
  ])
  .tx('fire_an_event', 'Fire event to watch', [
    [3],
    [47]
  ])
  .done();
});
