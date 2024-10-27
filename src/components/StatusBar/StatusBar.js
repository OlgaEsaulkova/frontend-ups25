import "./StatusBar.scss";
import Wifi from "../../images/icons/Wifi@2x.svg";
import Mobile from "../../images/icons/Mobile Signal@2x.svg";
import Battery from "../../images/icons/Battery.svg";
export const StatusBar = () => {
  return (
    <div className="StatusBar">
      <p className="StatusBar__time">9:41</p>
      <div className="StatusBar__icons">
        <img className="StatusBar__icon" src={Mobile} />
        <img className="StatusBar__icon" src={Wifi} />
        <img className="StatusBar__icon" src={Battery} />
      </div>
    </div>
  );
};
