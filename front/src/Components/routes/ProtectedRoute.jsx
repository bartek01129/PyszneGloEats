import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children, requiredRole }) {
  const token = localStorage.getItem('token');
  const location = useLocation();
  const tokenPayload = token.split('.')[1];
  const decodedToken = JSON.parse(atob(tokenPayload));

  if (!token) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  let roles = [];
  roles = decodedToken.aub;
  if (!roles.includes(requiredRole)) {
    console.log('Nie masz odpowiedniej roli');
    return <Navigate to="/auth/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
