import { Navigate, Route, Routes } from "react-router-dom";
import RobotsListPage from "../../pages/RobotsListPage/RobotsListPage";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="home" element />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/robot-creator" element={<Navigate to="/home" />} />
        </Routes>
        <RobotsListPage />
      </main>
    </div>
  );
};

export default App;
