import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <main className="main-content">
      <Header />
      <Routes>
        <Route path="/" element="/home" />
        <p>BattleRobots</p>
      </Routes>
    </main>
  );
};

export default App;
