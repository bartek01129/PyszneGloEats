import { CartApi } from './CartApi';
import './Cart.css';
import { NavBarGuest } from '../navBar/NavBarGuest';

const Cart = () => {
  return (
    <div className="cartBody">
      <NavBarGuest />
      <CartApi />
    </div>
  );
};

export default Cart;
