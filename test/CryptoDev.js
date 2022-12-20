const { ethers, network }  = require( "hardhat")
const { WHITELIST_CONTRACT_ADDRESS,METADATA_URL,crytoDevGoerliAddress,crytoDevPolygonAddress } =require( "../constants")
const  { main } = require( "../scripts/deploy")
const { expect, assert } =require( "chai")
const amount = ethers.utils.parseEther("0.01")
describe("CrytoDevs",()=>{
       let CrytoDev, user1,deployer, user2
    beforeEach(async()=>{
          CrytoDev = await main();
          [deployer,user1,user2] = await ethers.getSigners()
    })

    it("ensures the name and symbol entered is correct and symbol",async()=>{
          const name = await CrytoDev.name()
          const symbol = await CrytoDev.symbol()
          expect(name.toString()).to.equal("Crypto Devs")
          expect(symbol.toString()).to.equal("CD")
    })

    it("ensures that the initial presale is false",async()=>{
         const presaleStatus = await CrytoDev.presaleStarted()
         assert.equal(presaleStatus,false)
    })

    it("reverts if the presale has not started",async()=>{
        await expect(CrytoDev.presaleMint()).to.be.revertedWith("Presale is not running")
    })

    it("reverts if the presale time has passed",async()=>{
      await CrytoDev.startPresale()
      await network.provider.send("evm_increaseTime",[300])
      await network.provider.send("evm_mine")
      await expect(CrytoDev.presaleMint()).to.be.revertedWith( "Presale is not running")
    })

    it("reverts if the address is not whiteListed",async()=>{
        const presale  = await CrytoDev.startPresale()
        await expect(CrytoDev.presaleMint()).to.be.revertedWithoutReason()
    })

    

 

 
})