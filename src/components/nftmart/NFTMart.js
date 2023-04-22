import FirstImage from "../../assets/images/unsplash_8uZPynIu-rQ.png";
import SecondImage from "../../assets/images/unsplash_OlTjeydUpQw.png";
import ThirdImage from "../../assets/images/unsplash_pVq6YhmDPtk.png";
import FourthImage from "../../assets/images/unsplash_RnCPiXixooY.png";
import FifthImage from "../../assets/images/unsplash_tMbQpdguDVQ.png";
import SixthImage from "../../assets/images/unsplash_tZCrFpSNiIQ.png";
import SeventhImage from "../../assets/images/unsplash_VS_kFx4yF5g.png";
import EightImage from "../../assets/images/Top.png";
import Arrow from "../../assets/images/akar-icons_chevron-down.png";
import Grid from "../../assets/images/Icon 1.png";
import Tiles from "../../assets/images/Icon 2.png";
import "./NFTMart.css";

function NFTMart() {

  
  
  return (
    <div className="nft__mart">
      <div className="nftmart__top mt-4">
        <h1 className="nftmart__title">Cryptographics</h1>
        <button className="nftcreate">Create Item</button>
      </div>
      <div className="nftmart__center mt-2">
        <div className="nftmart__btn">
          <button className="recent">
            Recent <img src={Arrow} alt="arrow" />
          </button>
          <button className="low">
            Low to High
            <img src={Arrow} alt="arrow" />
          </button>
          <button className="all">
            All
            <img src={Arrow} alt="arrow" />
          </button>
        </div>
        <div className="nftleft__btn">
          <img src={Tiles} alt="tiles" />
          <img src={Grid} alt="grid" />
        </div>
      </div>
      <div className="nftmart__body mt-4">
        <div className="nfts">
          <div className="nftmart__card">
            <img src={FirstImage} alt="nft" />
            <div className="nft_det">
              <h2>The Holy Grail</h2>
              <p>Pixart Motion</p>
            </div>
          </div>
          <div className="nftmart__price">
            <p className="price">Fixed price</p>
            <button className="nft__eth">0.001ETH</button>  
          </div>
        </div>
        <div className="nfts">
          <div className="nftmart__card">
            <img src={SecondImage} alt="nft" />
            <div className="nft_det">
              <h2>Mirror Glass Effect</h2>
              <p>Pixart Motion</p>
            </div>
          </div>
          <div className="nftmart__price">
            <p className="price">Open bidding</p>
            <button className="nft__eth">0.005ETH</button>
          </div>
        </div>
        <div className="nfts">
          <div className="nftmart__card">
            <img src={ThirdImage} alt="nft" />
            <div className="nft_det">
              <h2>Neon in Life</h2>
              <p>Pixart Motion</p>
            </div>
          </div>
          <div className="nftmart__price">
            <p className="price">Fixed price</p>
            <button className="nft__eth">0.002ETH</button>
          </div>
        </div>
        <div className="nfts">
          <div className="nftmart__card">
            <img src={FourthImage} alt="nft" />
            <div className="nft_det">
              <h2>Oil Source</h2>
              <p>Pixart Motion</p>
            </div>
          </div>
          <div className="nftmart__price">
            <p className="price">Fixed price</p>
            <button className="nft__eth">0.001ETH</button>
          </div>
        </div>
        <div className="nfts">
          <div className="nftmart__card">
            <img src={FifthImage} alt="nft" />
            <div className="nft_det">
              <h2>World Surface</h2>
              <p>Pixart Motion</p>
            </div>
          </div>
          <div className="nftmart__price">
            <p className="price">Open bidding</p>
            <button className="nft__eth">0.004ETH</button>
          </div>
        </div>
        <div className="nfts">
          <div className="nftmart__card">
            <img src={SixthImage} alt="nft" />
            <div className="nft_det">
              <h2>Infinity Door</h2>
              <p>Pixart Motion</p>
            </div>
          </div>
          <div className="nftmart__price">
            <p className="price">Fixed price</p>
            <button className="nft__eth">0.005ETH</button>
          </div>
        </div>
        <div className="nfts">
          <div className="nftmart__card">
            <img src={SeventhImage} alt="nft" />
            <div className="nft_det">
              <h2>Bi-Condtional Effect</h2>
              <p>Pixart Motion</p>
            </div>
          </div>
          <div className="nftmart__price">
            <p className="price">Fixed price</p>
            <button className="nft__eth">0.002ETH</button>
          </div>
        </div>
        <div className="nfts">
          <div className="nftmart__card">
            <img src={EightImage} alt="nft" />
            <div className="nft_det">
              <h2>Motion View</h2>
              <p>Pixart Motion</p>
            </div>
          </div>
          <div className="nftmart__price">
            <p className="price">Open bidding</p>
            <button className="nft__eth">0.009ETH</button>
          </div>
        </div>
        <div>
        
        </div>
      </div>
    </div>
  );
}

export default NFTMart;
