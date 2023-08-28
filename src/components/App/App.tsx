import { Navigate, Route, Routes } from "react-router-dom";
import NewRobotPage from "../../pages/NewRobotPage/NewRobotPage";
import RobotsListPage from "../../pages/RobotsListPage/RobotsListPage";
import { useAppSelector } from "../../store";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";

const App = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.uiState.isLoading);

  return (
    <div>
      <Header />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Navigate to="/home" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <RobotsListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/robot-creator"
            element={
              <ProtectedRoute>
                <NewRobotPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      {isLoading && <Loading />}
    </div>
  );
};

export default App;
