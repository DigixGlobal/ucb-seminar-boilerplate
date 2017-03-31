const ContractResolver = artifacts.require('@digix/cacp-contracts/contracts/ContractResolver.sol');
const MathUtils = artifacts.require('@digix/solidity-core-libraries/contracts/MathUtils.sol');
const Boilerplate = artifacts.require('./Boilerplate.sol');

module.exports = function (deployer) {
  deployer.deploy(MathUtils).then(() => {
    return deployer.deploy(ContractResolver);
  }).then(() => {
    return deployer.link(MathUtils, Boilerplate);
  }).then(() => {
    return deployer.deploy(Boilerplate, ContractResolver.address);
  })
};


