import { BrowserRouter as Router } from 'react-router-dom';
import AdminRouter from './AdminRouter';
import AuthRouter from './AuthRouter';

function RouterClass() {
  return (
    <Router>
      <AuthRouter />
      <AdminRouter />
    </Router>
  );
}

export default RouterClass;
