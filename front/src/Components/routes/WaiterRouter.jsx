import { Route, Routes } from 'react-router-dom';
import WaiterPage from '../waiterPage/WaiterPage';
import ProtectedRoute from './ProtectedRoute';

function WaiterRouter() {
  return (
    <Routes>
      <Route
        path=""
        element={<ProtectedRoute element={<WaiterPage />} role="ROLE_WAITER" />}
      />
    </Routes>
  );
}

export default WaiterRouter;
