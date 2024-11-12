import { Route, Routes } from 'react-router-dom';
import HomePage from '../../Components/homePage/HomePage';

function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default HomeRouter;
