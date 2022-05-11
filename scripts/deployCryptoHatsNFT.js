const hre = require("hardhat");

async function main() {

  const baseURI = "ipfs://QmZN9z4m8fswzWD6AnhdAQeyuw125mf5SBYCdZaBU7fK5i/";

  const CryptoHatsNFT = await hre.ethers.getContractFactory("CryptoHatsNFT");
  const cryptoHatsNFT = await CryptoHatsNFT.deploy(baseURI);

  await cryptoHatsNFT.deployed();

  console.log("CryptoHatsNFT deployed to:", cryptoHatsNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
