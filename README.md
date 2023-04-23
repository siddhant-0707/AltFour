# Retro NFT Marketplace end to end



To set up the repository and run the marketplace locally, clone the repo and run the following commands
```bash
cd AltFour
npm install
npm start
```
You need to have a MetaMask wallet setup, with the Goerli Test Network setup with some ETH. To mine some go to `https://goerli-faucet.pk910.de/`. You also need to create a .env file in the root directory of the format
```
REACT_APP_ALCHEMY_API_URL=
REACT_APP_PRIVATE_KEY=
REACT_APP_PINATA_KEY=
REACT_APP_PINATA_SECRET=
```
You can also use any other dApp and IPFS provider.