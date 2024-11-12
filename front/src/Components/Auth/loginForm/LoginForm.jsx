import { useState } from 'react';
import './LoginForm.css';
import { FaUserAlt } from 'react-icons/fa';
import { FaUnlock } from 'react-icons/fa';
import { login } from './LoginApi';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(username, password);
      localStorage.setItem('token', data.token);
      console.log(data.message);
      const token = localStorage.getItem('token');
      const tokenPayload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(tokenPayload));
      console.log(decodedPayload.aud);
      if (decodedPayload.aud == 'ROLE_GUEST') {
        console.log('GUEST');
      } else if (decodedPayload.aud == 'ROLE_ADMIN') {
        navigate('/admin/users');
      } else if (decodedPayload.aud == 'ROLE_COOK') {
        console.log('COOK');
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
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              onFocus=""
              required
            />
            <FaUserAlt className="icon" />
          </div>
          <div className="input-box">
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <FaUnlock className="icon" />
          </div>
          <div className="forgot-password">
            <a href='#'>Forgot password?</a>
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
