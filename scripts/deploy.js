const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const counter = await ethers.getContractFactory("Counter"); // Replace with your contract's name
  const Counter = await counter.deploy();

  console.log("Counter contract address:", Counter.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
