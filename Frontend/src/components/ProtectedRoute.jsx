import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Switch from sessionStorage to localStorage token
  const token = localStorage.getItem("token");

  if (!token) {
    // Redirect to /login, not the home page /
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;