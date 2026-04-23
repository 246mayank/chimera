require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const { PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/AdtxYwp8AtXi9tfA5Ww5c`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  }
};