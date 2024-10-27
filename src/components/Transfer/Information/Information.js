import "./Information.scss";
import Tbank from "../../../images/icons/T-bank.svg";
import Sum from "../../../images/icons/sum.svg";
export const Information = () => {
  return (
    <div className="Information">
      <div className="Information__info">
        <div className="Operation__item">
          <h4 className="Operation__sum-text">Сумма</h4>
          <p className="Operation__sum">42 530 ₽</p>
        </div>
        <div className="Information__type">
          <p className="Information__text">Тип операции</p>
          <div className="Operation__wrapper">
            <img className="Operation__icon-sum" src={Sum} />
            <p className="Operation__type">Поступление</p>
          </div>
        </div>
      </div>
      <div className="Information__item">
        <h3 className="Operation__title">Придет на:</h3>
        <p className="Information__text">куда будет осуществлен перевод</p>
      </div>
        <div className="Operation__bank Information__block Information__block_m">
          <img className="Operation__icon" src={Tbank} />
          <div className="Operation__bank-wrapper">
            <h4 className="Operation__bank-text">+7 (901) 871-09-12</h4>
            <p className="Operation__bank-info">Т-Банк (Тинькофф)</p>
          </div>
          <p className="Operation__bank-text Information__sum">143 000 ₽</p>
        </div>
        <p className="Information__text">Откуда придет</p>
        <div className="Operation__bank Information__block">
          <img className="Operation__icon" src={Tbank} />
          <div className="Operation__bank-wrapper">
            <h4 className="Operation__bank-text">+7 (901) 871-09-12</h4>
            <p className="Operation__bank-info">Т-Банк (Тинькофф)</p>
          </div>
      </div>
    </div>
  );
};
