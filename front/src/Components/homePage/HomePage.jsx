import './HomePage.css';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate();

  const naviToLoginPage = () => {
    navigate('/auth/login');
  };

  const naviToRegisterPage = () => {
    navigate('/auth/register');
  };

  return (
    <>
      <div className="container-fluid">
        <h1>Welcome to PyszneGloEats!</h1>
        <p>
          Nasz restauracja oferuje szeroką gamę dań z całego świata, w tym
          kuchnię polską, francuską oraz międzynarodową. Wierzymy, że naszym
          celem jest zapewnienie naszym gościom jak najlepszych doświadczeń
          kulinarnych.
        </p>
        <div className="">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={naviToLoginPage}
          >
            Zaloguj się
          </button>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={naviToRegisterPage}
          >
            Zarejestruj się
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
