import { ACCESS_TOKEN } from "../../constant";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    auth().catch(() => {
      setIsAuthorized(false);
    });
  }, []);

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuthorized(false);
      return;
    }
    setIsAuthorized(true);
  };

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : <Navigate to="/login" />;
};

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  console.log("Logged out and token removed from local storage.");
};

export default ProtectedRoutes;
