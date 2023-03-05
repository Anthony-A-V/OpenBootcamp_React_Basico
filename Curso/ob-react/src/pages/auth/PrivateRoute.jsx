import { Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component, isAuthenticated, ...props }) {
  return isAuthenticated ? <Component {...props} /> : <Navigate to="/login" replace />;
}
