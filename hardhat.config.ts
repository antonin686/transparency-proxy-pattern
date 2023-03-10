require("dotenv").config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@openzeppelin/hardhat-upgrades';

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API,
  },
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
    },
    goerli: {
      url: process.env.ALCHEMY_GOERLI_RPC_WITH_API,
      accounts: [`${process.env.PRIVATE_ADDRESS}`],
    },
    // polygonMumbai: {
    //   url: process.env.ALCHEMY_POLYGON_MUMBAI_RPC_WITH_API,
    //   accounts: [`${process.env.PRIVATE_ADDRESS}`],
    // }
  }
};

export default config;
