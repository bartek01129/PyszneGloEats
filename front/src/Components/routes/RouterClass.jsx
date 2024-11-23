import { BrowserRouter as Router } from 'react-router-dom';
import AdminRouter from './AdminRouter';
import AuthRouter from './AuthRouter';
import HomeRouter from './HomeRouter';
import GuestRouter from './GuestRouter';
import CookRouter from './CookRouter,';
import WaiterRouter from './WaiterRouter';

function RouterClass() {
  return (
    <Router>
      <AuthRouter />
      <AdminRouter />
      <HomeRouter />
      <GuestRouter />
      <CookRouter />
      <WaiterRouter />
    </Router>
  );
}

export default RouterClass;
