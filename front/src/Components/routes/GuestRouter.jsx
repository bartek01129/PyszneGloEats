import { Route, Routes } from 'react-router-dom';

import GuestPage from '../guestPage/GuestPage';
import Cart from '../guestPage/cart/Cart';
import GuestOrdersPage from '../guestPage/guestOrders/GuestOrdersPage';

function GuestRouter() {
  return (
    <Routes>
      <Route path="/guest/products" element={<GuestPage />} />
      <Route path="/guest/cart" element={<Cart />} />
      <Route path="/guest/orders" element={<GuestOrdersPage />} />
    </Routes>
  );
}

export default GuestRouter;
