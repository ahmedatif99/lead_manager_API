import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
  if (isLoading) {
    return <h2>Loading ...</h2>;
  } else if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};

export default PrivateRoute;
