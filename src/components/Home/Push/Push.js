import "./Push.scss";
export const Push = ({checked, onChange}) => {
  return (
    <div className="Push">
      <div className="Push__wrapper">
        <p className="Push__info">Присылать уведомления</p>
        <div className="Push__switch">
          <input
            type="checkbox"
            className="Push__switch-checkbox"
            name="toggleSwitch"
            id="toggleSwitch"
          />
          <label className="Push__switch-label" htmlFor="toggleSwitch">
            <span className="Push__switch-switch" />
            <span className="Push__switch-inner" />
          </label>
        </div>
      </div>
    </div>
  );
};
