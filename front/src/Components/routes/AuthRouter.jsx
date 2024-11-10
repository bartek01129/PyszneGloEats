import { Route, Routes } from 'react-router-dom';
import LoginForm from '../Auth/loginForm/LoginForm';
import RegisterForm from '../Auth/RegisterForm/Register';
import HomePage from '../Auth/homePage/HomePage';

function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/login" element={<LoginForm />} />
      <Route path="/auth/register" element={<RegisterForm />} />
    </Routes>
  );
}

export default AuthRouter;
