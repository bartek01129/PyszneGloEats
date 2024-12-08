import WaiterService from '../../waiterPage/waiterService/WaiterService';
import { NavBarGuest } from '../navBar/NavBarGuest';
import { GuestOrdersApi } from './GuestOrdersApi';

const GuestOrdersPage = () => {
  const token = localStorage.getItem('token');
  const tokenPayload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const username = decodedPayload.sub;
  return (
    <div className="guest-order-body">
      <NavBarGuest />
      <GuestOrdersApi />

      <WaiterService username={username} />
    </div>
  );
};

export default GuestOrdersPage;
