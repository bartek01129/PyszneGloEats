import { BrowserRouter as Router } from 'react-router-dom';
import AdminRouter from './AdminRouter';
import AuthRouter from './AuthRouter';
import HomeRouter from './HomeRouter';
import GuestRouter from './GuestRouter';

function RouterClass() {
  return (
    <Router>
      <AuthRouter />
      <AdminRouter />
      <HomeRouter />
      <GuestRouter />
    </Router>
  );
}

export default RouterClass;
