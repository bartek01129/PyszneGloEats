import { BrowserRouter as Router } from 'react-router-dom';
import AdminRouter from './AdminRouter';
import AuthRouter from './AuthRouter';
import HomeRouter from './HomeRouter';
import GuestRouter from './GuestRouter';
import CookRouter from './CookRouter,';

function RouterClass() {
  return (
    <Router>
      <AuthRouter />
      <AdminRouter />
      <HomeRouter />
      <GuestRouter />
      <CookRouter />
    </Router>
  );
}

export default RouterClass;
