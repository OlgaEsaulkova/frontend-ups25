import { StatusBar } from "../StatusBar/StatusBar";
import { HomeIndicator } from "../HomeIndicator/HomeIndicator";
import "./Payment.scss";
import { Back } from "../Back/Back";
import { Button } from "../Button/Button";
import { Tick } from "./Tick/Tick";
import { Details } from "./Details/Details";
import { Link, useNavigate } from "react-router-dom";

export const Payment = () => {
  const navigate = useNavigate();
  return (
    <div className="Payment">
      <StatusBar />
      <Back onClick={() => navigate("/transfer")}></Back>
      <Tick />
      <Details />
      <div className="Payment__wrapper">
        <Button
          className="btn btn-appeal"
          onClick={() => navigate("/transfer")}
        >
          Подать аппеляцию
        </Button>
        <Button className="btn" onClick={() => navigate("/")}>
          На главную
        </Button>
      </div>

      <HomeIndicator />
    </div>
  );
};
