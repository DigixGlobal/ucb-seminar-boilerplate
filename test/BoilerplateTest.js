const {
  BIG_INT_MINUS_TWO,
  BIG_INT,
  ONE_DAY_IN_SECONDS,
  currentTimestamp,
  randomTime,
  randomInt,
} = require('@digix/contest/lib/helpers');

const Contest = require('@digix/contest').default;

const crypto = require('crypto');

const Boilerplate = artifacts.require('./Boilerplate.sol');

contract('Boilerplate', function(accounts) {
  new Contest({timeout: 200000})

  .artifact(Boilerplate)
  .describe('add(x,y) with random values')
  .call('add', 'Add two unsigned integers safely',
    Array.apply(null, {length: 30}).map(() => {
      const x = randomInt(1, 5);
      const y = randomInt(1, 5);
      const result = x + y;
      return [[x, y], [result]]
    })
  )
  .describe('subtract(x,y) with random values')
  .call('subtract', 'Subtract two unsigned integers safely',
    Array.apply(null, {length: 30}).map(() => {
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
  .done();
});
