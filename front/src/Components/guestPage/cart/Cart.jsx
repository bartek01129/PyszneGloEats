import { CartApi } from './CartApi';
import './Cart.css';
import { CreateOrder } from './orderService/OrderApi';
import { NavBarGuest } from '../navBar/NavBarGuest';

const handleCreateOrder = async () => {
  await CreateOrder();
};
const Cart = () => {
  return (
    <div className="cartBody">
      <NavBarGuest />
      <CartApi />
      <button className="btn btn-primary" onClick={() => handleCreateOrder()}>
        Zamów
      </button>
    </div>
  );
};

export default Cart;
