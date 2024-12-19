import { Routes, Route } from 'react-router-dom';
import AdminPage from '../adminPage/AdminPage';
import ProtectedRoute from './ProtectedRoute';

function AdminRouter() {
  return (
    <Routes>
      <Route
        path="users"
        element={<ProtectedRoute element={<AdminPage />} role="ROLE_ADMIN" />}
      />
    </Routes>
  );
}

export default AdminRouter;
