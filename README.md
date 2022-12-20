# 👩‍⚖️ **CryptoDevs Smart Contract**

<div style="margin-top:40px"></div>

### 🎛 **The useCases of the smart contract**

1. The smart contract allows presale
2. The smart contract allows postsale
3. The baseURI function returns the json metadata for the Nft
4. The contract allows only the owner or deployer of the contract to withdraw from the contract

<div style="margin-top:40px"></div>

## 🌌 **what is a Nft metadata?**  

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