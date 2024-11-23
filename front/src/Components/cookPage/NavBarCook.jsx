const NavBarCook = () => {
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
            <a className="nav-link" href="/cook">
              Zamówienia
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/cook/assignOrders">
              Moje zamówienia
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active ">
            <a className="nav-link" href="/cook/assignOrders">
              Jesteś zalogowany jako: <b>{name}</b>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarCook;
