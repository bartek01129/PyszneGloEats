import { Route, Routes } from 'react-router-dom';
import CookPage from '../cookPage/CookPage';
import CookOrderPage from '../cookPage/cookOrders/CookOrderPage';
import ProtectedRoute from './ProtectedRoute';

function CookRouter() {
  return (
    <Routes>
      <Route
        path=""
        element={<ProtectedRoute element={<CookPage />} role="ROLE_COOK" />}
      />
      <Route
        path="assignOrders"
        element={
          <ProtectedRoute element={<CookOrderPage />} role="ROLE_COOK" />
        }
      />
    </Routes>
  );
}

export default CookRouter;
