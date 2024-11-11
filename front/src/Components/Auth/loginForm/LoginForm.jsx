import { useState } from 'react';
import './LoginForm.css';
import { FaUserAlt } from 'react-icons/fa';
import { FaUnlock } from 'react-icons/fa';
import { login } from './LoginApi';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(username, password);
      localStorage.setItem('token', data.token);
      console.log(data.message);
    } catch (err) {
      console.log(err);
      console.log('nie powidło sie');
    }
  };

  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
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
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" onClick={loginSubmit}>
          Login
        </button>

        <div className="register-link">
          <p>
            You hungry? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
