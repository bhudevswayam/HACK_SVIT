require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/P088uk5jEGxyv0l72Tws82qI1SMhdDId',
      accounts: ['097da160d15cb031bdef723c04ce5e5e7c3a441e532b295d6868c1553c005f3a'],
    },
  },
};