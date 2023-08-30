import { PropsWithChildren } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../firebase/firebase";
import Loading from "../Loading/Loading";

const ProtectedRoute = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/home" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
