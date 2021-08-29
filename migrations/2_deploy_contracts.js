var CoffeeSupplyChain = artifacts.require("./CoffeeSupplyChain.sol");

module.exports = function (deployer) {
  deployer.deploy(CoffeeSupplyChain);
};
