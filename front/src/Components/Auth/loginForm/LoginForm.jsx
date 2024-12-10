import { useState } from 'react';
import './LoginForm.css';
import { FaUserAlt, FaUnlock } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { login } from './LoginApi';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(email, password, setError);
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
      <div className="container h-50">
        <div className="row justify-content-md-center pt-2">
          <div className="col-md-5 mt-2 p-0 login">
            <div className="wrapper ">
              <form className="form_input" action="">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    Nieprawidłowy email lub hasło. Zaloguj się ponownie.
                  </div>
                )}
                <h1>Zaloguj się</h1>
                <div className="input-box">
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Adres Email"
                    required
                  />
                  <FaUserAlt className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Hasło"
                    required
                  />
                  <FaUnlock className="icon" />
                  <FaLock className="icon" />
                </div>
                <div className="forgot-password mb-4 d-flex justify-content-end h6 w-100">
                  <a href="#">
                    <Link to="/auth/emailRestart">Zapomniałeś hasła?</Link>
                  </a>
                </div>

                <button type="submit" onClick={loginSubmit}>
                  Login
                </button>

                <div className="register-link ">
                  <p>
                    Zgłodniałeś?{' '}
                    <Link to="/auth/register">Zarejestruj się</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5 mt-2 info gradient-custom p-4">
            <h1 className="text-center">Nasza historia</h1>
            <p className="h5">
              Marcin, utalentowany kucharz z małego miasteczka, zainwestował
              wszystkie swoje oszczędności w internetową restaurację, marząc o
              tym, by dzielić się smakami kuchni swojej babci z całym światem.
              Początkowo brak klientów i doświadczenia w promocji sprawił, że
              czuł się na skraju porażki. Pewnego dnia, w akcie desperacji,
              opublikował szczery wpis o swojej pasji i historii babci w mediach
              społecznościowych, który szybko zdobył serca tysięcy ludzi.
              Zamówienia zaczęły napływać, a jego strona stała się popularna,
              dzięki czemu Marcin nie tylko uratował biznes, ale też zatrudnił
              zespół, by sprostać rosnącemu popytowi. Dziś jego restauracja
              online to kulinarny fenomen, a Marcin z dumą mówi, że każdy sukces
              smakuje jak pierogi babci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
