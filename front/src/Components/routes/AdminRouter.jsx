import { Routes, Route } from 'react-router-dom';
import AdminPage from '../adminPage/AdminPage';

function AdminRouter() {
  return (
    <Routes>
      <Route path="/admin/users" element={<AdminPage />} />
    </Routes>
  );
}

export default AdminRouter;
