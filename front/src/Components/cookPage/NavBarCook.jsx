import { Link, useNavigate } from 'react-router-dom';
import { Logout } from '../Logout';

const NavBarCook = () => {
  const token = localStorage.getItem('token');
  const tokenPayload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const name = decodedPayload.sub;
  const navigate = useNavigate();
  return (
    <nav className="navbar m-0 navbar-expand-lg  navbar-guest">
      <div className="container-fluid navbar-guest-container">
        <Link
          to={{
            pathname: `/cook`,
          }}
        >
          <a className="navbar-brand ">
            Pyszne<span>Glo</span>Eats
          </a>
        </Link>
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
              <Link
                to={{
                  pathname: `/cook`,
                }}
              >
                <a className="nav-link" href="#">
                  Wszystkie zamówienia
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={{
                  pathname: `/cook/assignOrders`,
                }}
              >
                <a className="nav-link" href="#">
                  Moje zamówienia
                </a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active ">
              <a className="nav-link">
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

export default NavBarCook;
