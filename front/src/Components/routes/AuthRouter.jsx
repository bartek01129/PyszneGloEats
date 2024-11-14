import { Route, Routes } from 'react-router-dom';
import LoginForm from '../Auth/loginForm/LoginForm';
import RegisterForm from '../Auth/registerForm/Register';
import Page403 from '../Auth/403Page/Page403';
import EmailRestart from '../Auth/passwordRestartForm/emailRestart';

function AuthRouter() {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginForm />} />
      <Route path="/auth/register" element={<RegisterForm />} />
      <Route path="/auth/page403" element={<Page403 />} />
      <Route path="/auth/emailRestart" element={<EmailRestart />} />
    </Routes>
  );
}

export default AuthRouter;
