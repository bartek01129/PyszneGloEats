import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdAlternateEmail } from 'react-icons/md';
import './Register.css';
import { Register } from './RegisterApi';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';




const RegisterForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [warning, setWarning] = useState(false);
  const [passError, setPassError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



  const navigate = useNavigate();


  const handleRegisier = async (e) => {
    e.preventDefault();

    try {
      if (password === confirmPassword) {
        await Register(email, name, confirmPassword, navigate, setWarning);
      } else {
        setPassError(true);
        setTimeout(() => {
          setPassError(false);
        }, 3000);
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
              {warning && (
                <div className="alert alert-danger" role="alert">
                  Taki adres e-mail lub nazwa użykownika jest już zajęta!
                </div>
              )}
              {passError && (
                <div className="alert alert-danger" role="alert">
                  Hasła nie są identyczne
                </div>
              )}
              <h1>Załóż konto</h1>

              <div className="input-box">
                <input
                  type="email"
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
              </div>

              <div className="input-box">
              <input
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Hasło (wymagane)"
                required
              />
              {showPassword ? (
                <AiFillEye className='eye-icon icon' onClick={() => setShowPassword((prevState) => !prevState)} />
              ) : (
                <AiFillEyeInvisible className='eye-icon icon' onClick={() => setShowPassword((prevState) => !prevState)} />

              )}
            </div>

              <div className="input-box">
                <input
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Powtórz hasło (wymagane)"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-secondary submitButton"
                onClick={(e) => handleRegisier(e)}
              >
                Zarejestruj się
              </button>
            </form>
                <div>
                  <p>
                    Masz już konto?{' '}
                    <Link to="/auth/login">Zaloguj się</Link>
                  </p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
