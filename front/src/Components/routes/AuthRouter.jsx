import { Routes, Route } from 'react-router-dom';
import LoginForm from '../Auth/loginForm/LoginForm';
import RegisterForm from '../Auth/registerForm/Register';
import Page403 from '../Auth/403Page/Page403';
import EmailRestart from '../Auth/passwordRestartForm/emailRestart/EmailRestart';
import RestartForm from '../Auth/passwordRestartForm/restartForm/RestartForm';

function AuthRouter() {
  return (
    <Routes>
      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="page403" element={<Page403 />} />
      <Route path="emailRestart" element={<EmailRestart />} />
      <Route path="restartPassword" element={<RestartForm />} />
    </Routes>
  );
}

export default AuthRouter;
