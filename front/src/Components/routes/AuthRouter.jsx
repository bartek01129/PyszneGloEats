import { Route, Routes } from 'react-router-dom';
import LoginForm from '../Auth/loginForm/LoginForm';
import RegisterForm from '../Auth/RegisterForm/Register';
import Page403 from '../Auth/403Page/Page403';

function AuthRouter() {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginForm />} />
      <Route path="/auth/register" element={<RegisterForm />} />
      <Route path="/auth/page403" element={<Page403 />} />
    </Routes>
  );
}

export default AuthRouter;
