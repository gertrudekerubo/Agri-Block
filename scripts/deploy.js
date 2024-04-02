

const hre = require("hardhat");

async function main() {
 // const Tracking = await hre.ethers.getContractFactory("Tracking");
 // const tracking = await Tracking.deploy();

  //await tracking.deployed();

 // console.log(`Tracking deployed to ${tracking.address}`);
 const tracking = await hre.ethers.deployContract("Tracking");
 await tracking.waitForDeployment();
 console.log(tracking);
 console.log("deployed to ${tracking.target}");

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
