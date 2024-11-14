import { FaUserAlt, FaUnlock } from 'react-icons/fa';
import { Dropdown, Button, ButtonGroup } from 'react-bootstrap';

const RegisterForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Register</h1>

        <div className="input-box">
          <input type="text" placeholder="adres email" required />
          <FaUserAlt className="icon" />
        </div>

        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUserAlt className="icon" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaUnlock className="icon" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Repeat Password" required />
          <FaUnlock className="icon" />
        </div>

        <div className="dropdown input-box">
          <Dropdown as={ButtonGroup}>
            <Button variant="secondary">Jesteś?</Button>
            <Dropdown.Toggle
              split
              variant="secondary"
              id="dropdown-custom-components"
            />
            <Dropdown.Menu>
              <Dropdown.Item href="#">Gościem</Dropdown.Item>
              <Dropdown.Item href="#">Kucharzem</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <button type="submit">Zarejestruj się</button>
      </form>
    </div>
  );
};

export default RegisterForm;
