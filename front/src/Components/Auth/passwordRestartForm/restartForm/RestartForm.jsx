import { useState } from 'react';
import { FaUserAlt, FaUnlock } from 'react-icons/fa';
import './RestartForm.css';

const RestartForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');

  return (
    <div className="restartFormBody">
      <div className="restartFormWrapper">
        <form action="">
          <h1>Zresetuj swoje hasło</h1>

          <div className="input-box">
            <input
              type="text"
              onChange={(e) => setToken(e.target.value)}
              placeholder="kod autoryzacyjny"
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

          <button type="submit">Zarejestruj się</button>
        </form>
      </div>
    </div>
  );
};

export default RestartForm;
