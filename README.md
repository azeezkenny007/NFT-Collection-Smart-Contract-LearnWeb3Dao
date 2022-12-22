# 👩‍⚖️ **CryptoDevs Smart Contract**

<div style="margin-top:40px"></div>

### 🎛 **The useCases of the smart contract**

1. The smart contract allows presale
2. The smart contract allows postsale
3. The baseURI function returns the json metadata for the Nft
4. The contract allows only the owner or deployer of the contract to withdraw from the contract

<div style="margin-top:40px"></div>

## 🌌 **what is an Nft metadata?**  

<div style="margin-top:10px"></div>
 A Nft metadata looks like this

```json
  {
     name:"Nft name",
     description:"Nft description",
     image:"Nft ipfsHash or base64Hash"
     attributes:[
      {value:"can be any value",
      trait__types:"coolness"
      }
     ]
  }
```

this is what the Nft data on ```opensea``` or ```rarible``` look like.

<div style="margin-top:40px"></div>

### 👩‍💻 __Ways Which The Nft Metadata Can Be Hosted__

- [x] On-Chain
- [x] Off-chain
  
<div style="margin-top:40px"></div>

### 🦒 __On-Chain__ : 
   having your Nft metadata on-chain allows multiple possibilties
   some of the possibilites are which are the pros:
   - on-chain game devlopment
   - on-chain interaction
  
  cons :
   - Gas expensive

  
<div style="margin-top:30px"></div>

### 🚀 __Off-Chain__ : 
   having your Nft metadata on-chain allows multiple possibilties
   some of the possibilites are which are the pros:
   - Gas used is cheaper
   - Easy to write
  
  cons :
   - no on-chain interaction with your Nft

<div style="margin-top:30px"></div>

## 👩‍💻 __COMMANDS TO USE__


<div style="margin-top:20px"></div>

> * __To Compile the Contract__   

```solidity
          yarn hardhat compile
```


> * __To Clear the Compile__ Contract

```solidity
yarn hardhat clean
```
> * __To Deploy the Contract on hardhat__ 
 ```solidity
 yarn hardhat run scripts/<scripts file name>
 ```
> * __To Deploy the contract to a testnet__ 
 ```solidity
yarn hardhat run scripts/<scripts file name> --network <network name> 
```
> * __To Run Test on hardhat__   
 ```solidity
 yarn hardhat test
  ```
> * __To Run Test on a particular network__ 
```solidity
yarn hardhat test --network <network name> 
```
> * __To Run a paricular Test__ 
```solidity
 yarn hardhat test --grep <name of the test in quote>
 ```
>  * __To Run a Specific Test on a Particular Network__ 
 ```solidity
 yarn hardhat test --grep <name of the test in quote>  --network <network name> 
 ```

```bash
   The preffered networks can be found in the hardhat config file
```
<div style="margin-top:30px"></div>

## 📱  __Contact__
- __Phone number - +2348134570701__
* __Twitter - [ken_okha](https://twitter.com/Ken_okha "ken_okha")__
* __BlockChain developer__
