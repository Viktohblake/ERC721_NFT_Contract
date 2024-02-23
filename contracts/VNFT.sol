// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract VNFT is ERC721URIStorage {
   uint256 private _tokenIdCounter;

    string private _description;

    constructor(string memory name, string memory symbol, string memory description) ERC721(name, symbol) {
        _tokenIdCounter = 0;
        _description = description;
    }

    function getDescription() public view returns (string memory) { 
        return _description;
    }

    function mintNFT(address recipient, string memory tokenURI) public returns (uint256) {
        uint newTokenId = _tokenIdCounter;
        _mint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        _tokenIdCounter += 1;
        return newTokenId;
    }
        
}
