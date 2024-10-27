import "./Back.scss";
import ArrowLeft from "../../images/icons/Arrow-Left.svg";
import { Button } from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
export const Back = (props) => {
  const { onClick } = props;
  const navigate = useNavigate();
  return (
    <div className="Back">
      <div className="Back__block">
        <Button className="Back__icon" onClick={ onClick }>
          <img className="Back__img" src={ArrowLeft} />
        </Button>
        <h3 className="Back__title">Операция 9231</h3>
      </div>
    </div>
  );
};
