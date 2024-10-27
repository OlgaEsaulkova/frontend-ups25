import { StatusBar } from "../StatusBar/StatusBar";
import { HomeIndicator } from "../HomeIndicator/HomeIndicator";
import "./Transfer.scss";
import { Back } from "../Back/Back";
import { Information } from "./Information/Information";
import { Timer } from "./Timer/Timer";
import { Button } from "../Button/Button";

import { Link, useNavigate } from "react-router-dom";

export const Transfer = () => {
  const navigate = useNavigate();
  return (
    <div className="Transfer">
      <StatusBar />
      <Back onClick={() => navigate("/")}></Back>
      <Information />
      <Timer />
      <Button className="btn" onClick={() => navigate("/payment")}>
        Принять перевод
      </Button>
      <Button className="btn btn-not-active" onClick={() => navigate("/")}>
        Отказаться от перевода
      </Button>
      <HomeIndicator />
    </div>
  );
};
