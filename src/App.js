import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Transfer } from "./components/Transfer/Transfer";
import { Payment } from "./components/Payment/Payment";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="transfer" element={<Transfer />} />
        <Route path="Payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
