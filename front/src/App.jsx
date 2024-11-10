import { BrowserRouter as Router } from 'react-router-dom';
import AuthRouter from './Components/routes/AuthRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <AuthRouter />
    </Router>
  );
}

export default App;
