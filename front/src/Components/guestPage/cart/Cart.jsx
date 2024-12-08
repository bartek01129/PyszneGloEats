import { CartApi } from './CartApi';
import './Cart.css';
import { NavBarGuest } from '../navBar/NavBarGuest';
import WaiterService from '../../waiterPage/waiterService/WaiterService';

const Cart = () => {
  const token = localStorage.getItem('token');
  const tokenPayload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const username = decodedPayload.sub;
  return (
    <div className="cartBody">
      <NavBarGuest />
      <CartApi />
      <WaiterService username={username} />
    </div>
  );
};

export default Cart;
