import { CartApi } from './CartApi';
import './Cart.css';
import { CreateOrder } from './orderService/OrderApi';
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
