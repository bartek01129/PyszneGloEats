import { Route, Routes } from 'react-router-dom';

import GuestPage from '../guestPage/GuestPage';

function GuestRouter() {
  return (
    <Routes>
      <Route path="/guest/products" element={<GuestPage />} />
    </Routes>
  );
}

export default GuestRouter;
