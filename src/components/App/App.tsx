import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element="/home" />
          <p>BattleRobots</p>
        </Routes>
      </main>
    </div>
  );
};

export default App;
