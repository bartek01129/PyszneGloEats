import { useState } from 'react';
import './EmailRestart.css';
import { EmailRestartApi } from './EmailRestartApi';
import { useNavigate } from 'react-router-dom';

const EmailRestart = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSendEmail = async (e) => {
    e.preventDefault();

    await EmailRestartApi(email, navigate);
  };

  return (
    <div className="emailBody">
      <form className="row g-3" onSubmit={handleSendEmail}>
        <div className="col-auto">
          <label className="visually-hidden">Email</label>
          <input
            type="text"
            className="form-control-plaintext"
            id="staticEmail2"
            value="Twój adres email"
          />
        </div>
        <div className="col-auto">
          <label className="visually-hidden">adres e-mail</label>
          <input
            type="text"
            className="form-control"
            id="inputPassword2"
            placeholder="adres E-Mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailRestart;
