import { Route, Routes } from 'react-router-dom';
import CookPage from '../cookPage/CookPage';
import CookOrderPage from '../cookPage/cookOrders/CookOrderPage';

function CookRouter() {
  return (
    <Routes>
      <Route path="/cook" element={<CookPage />} />
      <Route path="/cook/assignOrders" element={<CookOrderPage />} />
    </Routes>
  );
}

export default CookRouter;
