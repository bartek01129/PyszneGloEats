import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function checkRole(requiredRole) {
  const token = localStorage.getItem('token');

  if (!token) return <Navigate to="/auth/login" replace />;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.aud === requiredRole;
  } catch (error) {
    console.log(error);
    return false;
  }
}

const ProtectedRoute = ({ element, role }) => {
  const hasAccess = checkRole(role);
  return hasAccess ? element : <Navigate to="/auth/page403" replace />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
  role: PropTypes.string.isRequired,
};
export default ProtectedRoute;
