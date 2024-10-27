import "./Menu.scss";
import Home from "../../images/icons/Home.svg";
import Document from "../../images/icons/Document.svg";
import Chat from "../../images/icons/Chat.svg";
import Card from "../../images/icons/Card.svg";
import Profile from "../../images/icons/Profile.svg";
export const Menu = () => {
  return (
    <nav className="Menu">
      <div className="Menu__block">
        <img className="Menu__icon" src={Home} />
      </div>
      <div className="Menu__block Menu__block-center">
        <img className="Menu__icon" src={Document} />
        <img className="Menu__icon" src={Chat} />
        <img className="Menu__icon" src={Card} />
      </div>
      <div className="Menu__block">
        <img className="Menu__icon" src={Profile} />
      </div>
    </nav>
  );
};
