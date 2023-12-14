/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomicfoundation/hardhat-toolbox")
module.exports = {
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/84dba5ada4e842599e7186bea02febdf",
      accounts: [""], // тут строка с приватным ключем
    },
  },
  solidity: {
    version: "0.8.0",
  },
};
