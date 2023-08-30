import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import RobotsList from "../../components/RobotsList/RobotsList";
import auth from "../../firebase/firebase";
import useRobotsApi from "../../hooks/useRobotsApi";
import { useAppDispatch } from "../../store";
import { loadRobotsActionCreator } from "../../store/Robots/RobotsSlice";

const RobotsListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getRobots } = useRobotsApi();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      return;
    }
    (async () => {
      const robots = await getRobots();

      dispatch(loadRobotsActionCreator(robots));
    })();
  }, [getRobots, dispatch, user]);

  return (
    <>
      <RobotsList />
    </>
  );
};

export default RobotsListPage;
