require("@nomicfoundation/hardhat-toolbox");

const PROJECT_ID = '6361298444ef4a92940db2f5c9bdaf94'
const PRIVATE_KEY = 'e4a2f5074ed22d407d699dfd997242c9b560e8f11194578fcf8e0e20c51da24d'



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${PROJECT_ID}`,
      accounts: [PRIVATE_KEY]
    },
    mainnet: {
      url: `https://polygon-mumbai.infura.io/v3/${PROJECT_ID}`,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: "0.8.9",
};
