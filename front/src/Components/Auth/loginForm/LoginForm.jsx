import { useState } from 'react';
import './LoginForm.css';
import { FaUserAlt, FaUnlock } from 'react-icons/fa';

import { login } from './LoginApi';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(email, password);
      localStorage.setItem('token', data.token);
      console.log(data.message);
      const token = localStorage.getItem('token');
      const tokenPayload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(tokenPayload));
      console.log(decodedPayload.aud);
      if (decodedPayload.aud == 'ROLE_GUEST') {
        navigate('/guest/products');
      } else if (decodedPayload.aud == 'ROLE_ADMIN') {
        console.log('ADMIN');
        navigate('/admin/users');
      } else if (decodedPayload.aud == 'ROLE_COOK') {
        navigate('/cook');
      } else if (decodedPayload.aud == 'ROLE_WAITER') {
        navigate('/waiter');
      }
    } catch (err) {
      console.log(err);
      console.log('nie powidło sie');
    }
  };

  return (
    <div className="webBody">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="adres Email"
              required
            />
            <FaUserAlt className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <FaUnlock className="icon" />
          </div>
          <div className="forgot-password">
            <a href="#">
              <Link to="/auth/emailRestart">Forgot password?</Link>
            </a>
          </div>

          <button type="submit" onClick={loginSubmit}>
            Login
          </button>

          <div className="register-link">
            <p>
              You hungry? <Link to="/auth/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
