import { useState } from 'react';
import { FaUserAlt, FaUnlock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { Register } from './RegisterApi';

const RegisterForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleRegisier = async (e) => {
    e.preventDefault();

    try {
      if (password === confirmPassword) {
        console.log('email: ' + email);
        console.log('name: ' + name);
        console.log('pass1: ' + password);
        console.log('pass2: ' + confirmPassword);
        await Register(email, name, confirmPassword);
        navigate('/auth/login');
      } else {
        alert('Hasła nie zgadzają się');
      }
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <div className="registerFormBody">
      <div className="registerFormWrapper">
        <form action="">
          <h1>Zarejestruj się</h1>

          <div className="input-box">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              required
            />
            <FaUserAlt className="icon" />
          </div>
          <div className="input-box">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
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

          <div className="input-box">
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repeat Password"
              required
            />
            <FaUnlock className="icon" />
          </div>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={(e) => handleRegisier(e)}
          >
            Zarejestruj się
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
