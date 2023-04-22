import NFTMart from "../../components/nftmart/NFTMart";
import SideNav from "../../components/sidenav/SideNav";
import TopNav from "../../components/topnav/TopNav";
import "./Dashboard.css"

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="upper">
        <TopNav />
      </div>
      <div className="dashboard__body">
        <div className="dashboard__navigation">
          <SideNav />
        </div>
        <div className="dashboard__market">
          <NFTMart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
