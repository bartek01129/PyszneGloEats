import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AdminRouter from './AdminRouter';
import AuthRouter from './AuthRouter';
import HomeRouter from './HomeRouter';
import GuestRouter from './GuestRouter';
import CookRouter from './CookRouter';
import WaiterRouter from './WaiterRouter';

function RouterClass() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<HomeRouter />} />

        <Route path="auth/*" element={<AuthRouter />} />

        <Route path="admin/*" element={<AdminRouter />} />

        <Route path="guest/*" element={<GuestRouter />} />

        <Route path="cook/*" element={<CookRouter />} />

        <Route path="waiter/*" element={<WaiterRouter />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default RouterClass;
