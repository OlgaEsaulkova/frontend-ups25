import "./Details.scss";
export const Details = () => {
  return (
    <div className="Details">
      <div className="Details__item">
        <p className="Details__title">Дата и время операции</p>
        <p className="Details__subtitle">23.06.2024 18:34</p>
      </div>
      <div className="Details__item">
        <p className="Details__title">Ваши реквизиты</p>
        <div className="Details__wrapper">
          <p className="Details__subtitle">+7 (901) 871-09-12</p>
          <p className="Details__title">Т-Банк (Тинькофф)</p>
        </div>
      </div>
      <div className="Details__item">
        <p className="Details__title">Сумма</p>
        <p className="Details__subtitle">42 530 ₽</p>
      </div>
    </div>
  );
};
