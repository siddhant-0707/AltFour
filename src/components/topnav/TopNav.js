import Logo from "../../assets/svgs/Logo.svg";
import Message from "../../assets/images/Elements.png";
import Notification from "../../assets/images/Elements (1).png";
import Wallet from "../../assets/images/Elements (2).png";
import Profile from "../../assets/images/bg.png";
import "./TopNav.css";

function TopNav() {
  return (
    <div className="topnav">
      <div className="topnav__left">
        <div className="topnav__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="topnav__links">
          <ul>
            <li>Dashboard</li>
            <li>About Us</li>
            <li>Faq</li>
          </ul>
        </div>
      </div>
      <div className="topnav__right">
        <div className="topnav__search">
          <input type="search" name="search nft" placeholder="Search NFT" />
        </div>
        <div className="topnav__notification">
          <img src={Message} alt="message" />
          <img src={Notification} alt="notification" />
          <img src={Wallet} alt="wallet" />
        </div>
        <div className="topnav__profile">
          <img src={Profile} alt="profile" />
          <p className="name">Leslie Alexander</p>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
