import axie from "../tile.jpeg";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./NFTMart.css";

function NFTTile(data) {
  const newTo = {
    pathname: "/nftPage/" + data.data.tokenId,
  };
  return (
    <Link to={newTo}>
      <div className="nft__mart bg-gray-900 text-white p-4">
        <div className="nftmart__body mt-4 border-2 border-gray-700 rounded-lg bg-gray-800 flex flex-wrap justify-evenly">
          <div className="nfts w-60 h-80 bg-gray-700 border-2 border-gray-900 rounded-md m-2">
            <div className="nftmart__card">
              <img src={data.data.image} alt="nft" className="w-full" />
              <div className="nft_det p-2">
                <h2 className="font-medium text-lg">{data.data.name}</h2>
                <span className="text-gray-400 text-sm">{data.data.description}</span>
              </div>
            </div>
            <div className="nftmart__price flex justify-between items-center border-t-2 border-gray-700 p-2">
              <p className="price font-medium text-sm">Fixed price</p>
              <button className="nft__eth bg-purple-600 text-white px-2 py-1 rounded-md">
                {data.data.price}ETH
              </button>
            </div>
          </div>
          {/* <div className="nfts w-60 h-80 bg-gray-700 border-2 border-gray-900 rounded-md m-2">
          <div className="nftmart__card">
            <img src={data.data.image} alt="nft" className="w-full" />
            <div className="nft_det p-2">
              <h2 className="font-medium text-lg">Mirror Glass Effect</h2>
              <p className="text-gray-400 text-sm">Pixart Motion</p>
            </div>
          </div>
          <div className="nftmart__price flex justify-between items-center border-t-2 border-gray-700 p-2">
            <p className="price font-medium text-sm">Open bidding</p>
            <button className="nft__eth bg-purple-600 text-white px-2 py-1 rounded-md">0.005ETH</button>
          </div>
        </div> */}
        </div>
      </div>
    </Link>
  );
}

export default NFTTile;
