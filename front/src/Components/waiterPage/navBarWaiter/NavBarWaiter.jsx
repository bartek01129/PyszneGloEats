import { useNavigate } from 'react-router-dom';
import { Logout } from '../../Logout';
import './NavBarWaiter.css';
export const NavBarWaiter = () => {
  const token = localStorage.getItem('token');
  const tokenPayload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const name = decodedPayload.sub;
  const navigate = useNavigate();
  return (
    <nav className="navbar m-0 navbar-expand-lg  navbar-waiter">
      <div className="container-fluid navbar-waiter-container">
        <a className="navbar-brand ">
          Pyszne<span>Glo</span>Eats
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Wydaj Zamówienia
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active ">
              <a className="nav-link" href="/cook/assignOrders">
                Jesteś zalogowany jako: <b>{name}</b>
              </a>
            </li>
            <li>
              <button
                className="btn btn-danger"
                onClick={() => Logout(navigate)}
              >
                Wyloguj się
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
