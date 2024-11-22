import { Route, Routes } from 'react-router-dom';
import CookPage from '../cookPage/CookPage';

function CookRouter() {
  return (
    <Routes>
      <Route path="/cook/" element={<CookPage />} />
    </Routes>
  );
}

export default CookRouter;
