import { useState } from 'react';
import './EmailRestart.css';
import { EmailRestartApi } from './EmailRestartApi';
import { useNavigate } from 'react-router-dom';

const EmailRestart = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [button, setButton] = useState(false);
  const navigate = useNavigate();
  const handleSendEmail = async (e) => {
    e.preventDefault();
    setButton(true);
    setTimeout(() => {
      setButton(false);
    }, 10000);
    await EmailRestartApi(email, navigate, setError);
  };

  return (
    <div className="emailBody">
      <div className="card-mail">
        <form action="" onSubmit={handleSendEmail}>
          <h1>Wyślij kod do zresetowania hasła</h1>

          <div className="input-box">
            <input
              type="text"
              className="input-mail"
              id="inputPassword2"
              placeholder="Adres E-Mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {button ? (
            <button type="submit" className="btn btn-secondary disabled">
              Wyślij kod
            </button>
          ) : (
            <button type="submit" className="btn btn-secondary">
              Wyślij kod
            </button>
          )}

          {error && (
            <div className="alert alert-danger alert-mail m-3 p-3" role="alert">
              Taki adres e-mail nie istnieje! Spróbuj ponownie za 10 sekund!
            </div>
          )}
        </form>
        
      </div>
    </div>
  );
};

export default EmailRestart;
