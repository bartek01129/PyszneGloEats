import { GuestApi } from './guestApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const GuestPage = () => {
  return (
    <div className="guestBody">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Produkty <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Koszyk
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/guest/cart">
                  <i className="bi bi-cart-fill"></i>
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <GuestApi />
    </div>
  );
};

export default GuestPage;
