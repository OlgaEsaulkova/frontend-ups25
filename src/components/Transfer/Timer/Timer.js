import "./Timer.scss";
import Time from "../../../images/icons/Timer.svg";
export const Timer = () => {
  return (
    <div className="Timer">
      <div className="Timer__block">
        <img className="Timer__icon" src={Time} />
        <div className="Timer__wrapper">
          <h4 className="Timer__title">Осталось: 6:21</h4>
          <p className="Timer__subtitle">выберите действие:</p>
        </div>
      </div>
    </div>
  );
};
