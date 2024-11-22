import { GetOrders } from './CookApi';

const CookPage = () => {
  return (
    <div className="cookBody">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          PyszneGloEats
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
                Zamówienia
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <GetOrders />
    </div>
  );
};

export default CookPage;
