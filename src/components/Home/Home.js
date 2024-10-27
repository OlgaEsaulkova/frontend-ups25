import { BalanceCard } from "./BalanceCard/BalanceCard";
import { StatusBar } from "../StatusBar/StatusBar";
import { Push } from "./Push/Push";
import { Operation } from "./Operation/Operation";
import { Menu } from "../Menu/Menu";
import { HomeIndicator } from "../HomeIndicator/HomeIndicator";
import "./Home.scss";
export const Home = () => {
  return (
    <div className="Home">
      <StatusBar />
      <h1 className="Home__title">Главная</h1>
      <BalanceCard />
      <Push />
      <Operation />
      <Menu />
      <HomeIndicator />
    </div>
  );
};
