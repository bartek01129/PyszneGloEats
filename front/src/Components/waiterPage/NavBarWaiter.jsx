import './WaiterPage.css';

const NavBarWaiter = () => {
  const token = localStorage.getItem('token');
  const tokenPayload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const name = decodedPayload.sub;

  return (
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
        <ul className="navbar-nav me-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/waiter">
              Zamówienia
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item active align-self-center ">
            <a className="nav-link">
              Jesteś zalogowany jako: <b>{name}</b>
            </a>
          </li>
          <li>
            <button type="button" className="btn btn-dark">
              Wyloguj
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarWaiter;
