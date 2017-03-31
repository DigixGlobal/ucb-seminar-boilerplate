const LightWalletProvider = require('@digix/truffle-lightwallet-provider');

const { KEYSTORE, PASSWORD } = process.env;

if (!KEYSTORE || !PASSWORD) { throw new Error('You must export KEYSTORE and PASSWORD (see truffle.js)'); }

module.exports = {
  networks: {
    kovan: {
      provider: new LightWalletProvider({
        keystore: KEYSTORE,
        password: PASSWORD,
        rpcUrl: 'https://ethereum03.digixdev.com/',
        pollingInterval: 2000,
        // debug: true,
      }),
      gas: 4600000,
      network_id: '42',
    },
    test: {
      provider: new LightWalletProvider({
        keystore: KEYSTORE,
        password: PASSWORD,
        prefund: 10e18,
        pollingInterval: 2000,
        //debug: true,
        rpcUrl: 'http://localhost:6545/',
      }),
      network_id: '*',
    },
  },
};
