import { Navigate, Route, Routes } from "react-router-dom";
import RobotsListPage from "../../pages/RobotsListPage/RobotsListPage";
import { useAppSelector } from "../../store";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import "./App.css";

const App = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.uiState.isLoading);

  return (
    <div>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="home" element={<RobotsListPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/robot-creator" element={<Navigate to="/home" />} />
        </Routes>
        {isLoading && <Loading />}
      </main>
    </div>
  );
};

export default App;
