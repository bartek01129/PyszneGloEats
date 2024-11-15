import { Route, Routes } from 'react-router-dom';

import GuestPage from '../guestPage/GuestPage';
import Cart from '../guestPage/cart/Cart';

function GuestRouter() {
  return (
    <Routes>
      <Route path="/guest/products" element={<GuestPage />} />
      <Route path="/guest/cart" element={<Cart />} />
    </Routes>
  );
}

export default GuestRouter;
