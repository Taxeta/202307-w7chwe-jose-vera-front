import { PropsWithChildren, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const ProtectedRoute = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    async () => {
      if (loading) {
        return <span>Loading...</span>;
      }

      if (!user) {
        return <Navigate to="/home" />;
      }
    };
  }, [user, loading]);

  return <>{children}</>;
};

export default ProtectedRoute;
