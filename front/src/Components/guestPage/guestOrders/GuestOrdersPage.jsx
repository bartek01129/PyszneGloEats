import { NavBarGuest } from '../navBar/NavBarGuest';
import { GuestOrdersApi } from './GuestOrdersApi';

const GuestOrdersPage = () => {
  return (
    <div className="guest-order-body">
      <NavBarGuest />
      <GuestOrdersApi />
    </div>
  );
};

export default GuestOrdersPage;
