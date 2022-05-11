const hre = require("hardhat");

async function main() {

  const baseURI = "ipfs://QmZN9z4m8fswzWD6AnhdAQeyuw125mf5SBYCdZaBU7fK5i/";

  const LarvaNuts = await hre.ethers.getContractFactory("LarvaNuts");
  const larvaNuts = await LarvaNuts.deploy(baseURI);

  await larvaNuts.deployed();

  console.log("LarvaNuts deployed to:", larvaNuts.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
