import './Page403.css';

const Page403 = () => {
  return (
    <>
      <div className="full-page">
        <div className="container-403page">
          <h1 className="error-title">403</h1>
          <p className="error-message">
            Niestety, nie masz dostępu do tej strony.
          </p>
          <p className="error-reason">Możliwe przyczyny:</p>
          <ul className="error-list">
            <li className="error-item">Brak uprawnień</li>
            <li className="error-item">
              Dostęp ograniczony dla wybranych użytkowników
            </li>
          </ul>
          <a href="/" className="error-button">
            Powrót do strony głównej
          </a>
        </div>
      </div>
    </>
  );
};

export default Page403;
