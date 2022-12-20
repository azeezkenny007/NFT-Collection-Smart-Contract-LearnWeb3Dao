// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const { METADATA_URL,WHITELIST_CONTRACT_ADDRESS } = require("../constants");
const { ethers } = require("hardhat");

async function main() {
   const CryptoDevFactory = await ethers.getContractFactory("CryptoDevs")
   
   const CryptoDev = await CryptoDevFactory.deploy(METADATA_URL,WHITELIST_CONTRACT_ADDRESS)
   await CryptoDev.deployed()
   console.log('---------- contract has been deployed hurray🚀🚀🚀🚀 ------------------')
   console.log('--------------------------------------------------------')
   console.log(`The CrytoDev contract has been deployed to ${CryptoDev.address}`)
   return CryptoDev
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then((e)=>{
  console.log(e)
}).catch((e) => {
  console.log(e);
  process.exitCode = 1;
});


module.exports={
   main
}
