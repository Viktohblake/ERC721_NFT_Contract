import { ethers } from "hardhat";

async function main() {
    
  // Conect to mumbai network
  const network = ethers.Network.name;
  console.log("Connect to network:", network);

  // Get the deployed contract instance
  const contractFactory = await ethers.getContractFactory("VNFT");
  const vnft: any = contractFactory.attach("0xDf77F373a9BD58CeE7Db9De7043f2CB5F9cAD3e5");
  console.log("Contract address:", vnft.getAddress);

  // Instantiate the IPFS Url for the NFT
  const ipfsUrl = "https://ipfs.io/ipfs/QmRNQPpLQ5nco37Qz1rZ2ARGL4z1o4NmSefk3dhG5EhST4";

  const recipient = (await ethers.provider.getSigner()).getAddress();
  console.log("Recipient address", recipient);
  const mintTransaction = await vnft.mintNFT(recipient, ipfsUrl);
  // get mint transaction info e.g. status, gas used etc
  const transactionInfo = await mintTransaction.wait();
  console.log("Transaction Info", transactionInfo);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });