import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
// Protected Route component that checks if the user is authenticated
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    const url = `/sign-in?url=${window.location.pathname}`;
    return <Navigate to={url} />;
  }

  // If the user is authenticated, render the children components (the protected page)
  return children;
};

export default ProtectedRoute;
