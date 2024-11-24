import { GuestApi } from './GuestApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavBarGuest } from './navBar/NavBarGuest';
import './GuestPage.css';

const GuestPage = () => {
  return (
    <div className="guestBody">
      <NavBarGuest />

      <GuestApi />
    </div>
  );
};

export default GuestPage;
