import { Route, Routes } from 'react-router-dom';

import GuestPage from '../guestPage/GuestPage';
import Cart from '../guestPage/cart/Cart';
import GuestOrdersPage from '../guestPage/guestOrders/GuestOrdersPage';
import ProtectedRoute from './ProtectedRoute';

function GuestRouter() {
  return (
    <Routes>
      <Route
        path="products"
        element={<ProtectedRoute element={<GuestPage />} role="ROLE_GUEST" />}
      />
      <Route
        path="cart"
        element={<ProtectedRoute element={<Cart />} role="ROLE_GUEST" />}
      />
      <Route
        path="orders"
        element={
          <ProtectedRoute element={<GuestOrdersPage />} role="ROLE_GUEST" />
        }
      />
    </Routes>
  );
}

export default GuestRouter;
