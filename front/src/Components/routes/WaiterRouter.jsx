import { Route, Routes } from 'react-router-dom';
import WaiterPage from '../waiterPage/WaiterPage';

function WaiterRouter() {
  return (
    <Routes>
      <Route path="/waiter" element={<WaiterPage />} />
    </Routes>
  );
}

export default WaiterRouter;
