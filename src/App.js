import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Body from "./components/Body";

import "./index.css";

const App = () => (
  <div className="app-container">
    <Navbar />
    <Body />
  </div>
);
export default App;
