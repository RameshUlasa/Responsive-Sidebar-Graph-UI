import PopulationGraph from "../PopulationGraph";
import CryptoPrices from "../CryptoPrices";

import "./index.css";

const Body = () => (
  <div className="main-body-container">
    <h1 className="body-main-head">
      Hello, Welcome to <span className="h-span">Ethan Analytics</span>
    </h1>
    <PopulationGraph />
    <CryptoPrices />
  </div>
);

export default Body;
