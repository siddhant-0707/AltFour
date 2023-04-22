/* eslint-disable no-undef */

// const { default: Web3 } = require('web3')

const TimelessNFT = artifacts.require('TimelessNFT')

module.exports = async (deployer) => {
  const accounts = await Web3.eth.getAccounts()
  await deployer.deploy(
    TimelessNFT, 
    'Timeless NFTs', 
    'TNT', 10, accounts[1]
  )
}