import "./SideNav.css";
import Drop from "../../assets/images/ic_baseline-keyboard-arrow-down.png";

function SideNav() {
  return (
    <div className="sidenav">
      <ul>
        <li>
          Status <img src={Drop} alt="dropdown" />
        </li>
        <li>
          Price <img src={Drop} alt="dropdown" />
        </li>
        <li>
          Collection <img src={Drop} alt="dropdown" />
        </li>
        <li>
          Categories <img src={Drop} alt="dropdown" />
        </li>
        <li>
          Sale <img src={Drop} alt="dropdown" />
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
