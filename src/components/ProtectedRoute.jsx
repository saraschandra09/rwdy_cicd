import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";   // ✅ import PropTypes

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// ✅ Validate props
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,  // must be a React node
};

export default ProtectedRoute;
