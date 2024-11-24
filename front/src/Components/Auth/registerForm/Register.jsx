import { useState } from 'react';
import { FaUserAlt, FaUnlock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MdAlternateEmail } from 'react-icons/md';
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
    <div className="container-fluid register-body">
      <div className="row align-items-center">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center feature-box">
          <h3>
            Witamy w naszym <span>PyszneGloEats!</span>
          </h3>
          <h3>
            Jedznie dostaniesz zanim sie{' '}
            <span className="highlight">szefie</span> objerzysz
          </h3>

          <div className="features d-flex flex-column align-items-center">
            <p>
              🌟
              <span className="highlight">Dołącz do naszej społeczności</span> i
              ciesz się smakiem w mgnieniu oka! 🌟
            </p>
            <p>
              Z nami nigdy nie będziesz głodny! 🥳 Dzięki błyskawicznym
              dostawom, pyszne jedzenie dotrze prosto pod Twoje drzwi w
              ekspresowym tempie! 🚗💨
            </p>

            <p>
              <strong>Dlaczego warto?</strong>
            </p>
            <ul>
              <li>
                <span className="highlight">🍕 Szybkość:</span> Dostarczamy w
                rekordowym czasie – niezależnie od pogody czy pory dnia!
              </li>
              <li>
                <span className="highlight">🍔 Smak:</span> Każde danie to
                prawdziwa uczta dla Twoich zmysłów. Wysokiej jakości składniki i
                świeżość, której nie da się podrobić!
              </li>
              <li>
                <span className="highlight">🍟 Komfort:</span> Wygodna aplikacja
                i łatwy proces zamówienia – bez wychodzenia z domu, bez
                czekania!
              </li>
            </ul>

            <p>
              <strong>Dołącz do naszej rodziny smakoszy</strong> i sprawdź,
              dlaczego nasi klienci wracają po więcej! 🔥🥡
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div className="wrapper-register">
            <form action="">
              <h1>Załóż konto</h1>

              <div className="input-box">
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail (wymagane)"
                  required
                />
                <MdAlternateEmail className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Imię (wymagane)"
                  required
                />
                <FaUserAlt className="icon" />
              </div>

              <div className="input-box">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Hasło (wymagane)"
                  required
                />
                <FaUnlock className="icon" />
              </div>

              <div className="input-box">
                <input
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Powtórz hasło (wymagane)"
                  required
                />
                <FaUnlock className="icon" />
              </div>
              <button
                type="submit"
                className="btn btn-secondary submitButton"
                onClick={(e) => handleRegisier(e)}
              >
                Zarejestruj się
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
