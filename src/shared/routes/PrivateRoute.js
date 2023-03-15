import React, { useContext } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";

import { AuthContext } from "../../shared/context/AuthContext";
const PrivateRoute = () => {
  const authCtx = useContext(AuthContext);

  const { token, isLoggedIn } = authCtx;

  return isLoggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
