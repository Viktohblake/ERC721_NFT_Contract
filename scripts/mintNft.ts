import { ethers } from "hardhat";

async function main() {
    
  // Conect to mumbai network
  const network = ethers.Network.name;
  console.log("Connect to network:", network);

  // Get the deployed contract instance
  const contractFactory = await ethers.getContractFactory("VNFT");
  const vnft: any = contractFactory.attach("0x1c31D708178358231141d258979b709e720028dC");
  console.log("Contract address:", vnft.getAddress);

  // Instantiate the IPFS Url for the NFT
  const ipfsUrl = "https://ipfs.io/ipfs/QmaP5tJD9rqUM6MfMkcfy4NAFSm1UgCh4YYyvcGcy7rWvg";

  const recipient = (await ethers.provider.getSigner()).getAddress();
  console.log("Recipient address", recipient);
  const mintTransaction = await vnft.mintNFT(recipient, ipfsUrl);
  // get mint transaction info e.g. status, gas used etc
  const transactionInfo = await mintTransaction.wait();
  const tokenId = transactionInfo.events[0].args.tokenId;
  console.log(`Minted NFT with token Id ${tokenId}`)

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });