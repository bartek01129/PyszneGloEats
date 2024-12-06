import { GuestApi } from './GuestApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavBarGuest } from './navBar/NavBarGuest';
import './GuestPage.css';
import WaiterService from '../waiterPage/waiterService/WaiterService';

const GuestPage = () => {
  const token = localStorage.getItem('token');
  const tokenPayload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const username = decodedPayload.sub;

  return (
    <div className="guestBody">
      <NavBarGuest />
      <GuestApi />
      <WaiterService username={username} />
    </div>
  );
};

export default GuestPage;
