import { ethers, upgrades } from "hardhat";

async function main() {
  const name = "BS23 Box";
  const initialValue = 0;

  const [deployer] = await ethers.getSigners();
  const Box = await ethers.getContractFactory("Box");
  const box = await upgrades.deployProxy(Box, [name, initialValue], {
    initializer: "initialize",
    kind: 'transparent'
  });

  await box.deployed();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  console.log("Contract address:", box.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
