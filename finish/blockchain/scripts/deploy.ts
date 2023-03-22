import { ethers } from "hardhat";

async function main () {
  // We get the contract to deploy
  const Fund = await ethers.getContractFactory('CrowdFund');
  console.log('Deploying Contract...');
  const fund = await Fund.deploy();
  await fund.deployed();
  console.log('Contract deployed to:', fund.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
