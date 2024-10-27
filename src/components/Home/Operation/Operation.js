import "./Operation.scss";
import Tbank from "../../../images/icons/T-bank.svg";
import Sum from "../../../images/icons/sum.svg";
import { Button } from "../../Button/Button";
import { Link,useNavigate } from 'react-router-dom';
export const Operation = () => {
  const navigate = useNavigate();
  return (
    <div className="Operation">
      <div className="Operation__item">
        <h3 className="Operation__title">Операция 9231</h3>
        <div className="Operation__wrapper">
          <img className="Operation__icon-sum" src={Sum} />
          <p className="Operation__type">Поступление</p>
        </div>
      </div>
      <div className="Operation__item">
        <h4 className="Operation__sum-text">Сумма</h4>
        <p className="Operation__sum">42 530 ₽</p>
      </div>
      <div className="Operation__bank">
        <img className="Operation__icon" src={Tbank} />
        <div className="Operation__bank-wrapper">
          <h4 className="Operation__bank-text">СБП</h4>
          <p className="Operation__bank-info">Т-Банк (Тинькофф)</p>
        </div>
      </div>
      <Button
        className="btn"
        onClick={() => navigate('/transfer')}
      >Принять</Button>
    </div>
  );
};
