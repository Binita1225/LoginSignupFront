import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  return userData && userData.userName ? children : <Navigate to="/" />;
};

export default PrivateRoute;
