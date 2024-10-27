import "./Tick.scss";
import TickSquare from "../../../images/icons/TickSquare.svg";
export const Tick = () => {
  return (
    <div className="Tick">
      <img className="Tick__icon" src={TickSquare} />
      <div className="Tick__info">
        <h3 className="Tick__title">Платеж подтвержден</h3>
        <p className="Tick__subtitle">Вы подтвердили получение средств</p>
      </div>
    </div>
  );
};
