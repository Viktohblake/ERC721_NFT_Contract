import { ethers } from "hardhat";

async function main() {
  
  // deploy nft contract
  const erc721ContractFactory = await ethers.getContractFactory("VNFT");
  const vnft = await erc721ContractFactory.deploy("Victor NFT", "VNFT", "This is a cat nft you would want in your collection")
  await vnft.waitForDeployment();
  
  console.log(
    "My NFT is deployed to :", await vnft.getAddress()
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
