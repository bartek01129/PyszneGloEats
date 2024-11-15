import { CartApi } from './CartApi';
import './Cart.css';

const Cart = () => {
  return (
    <div className="cartBody">
      <h1>koszyk</h1>
      <CartApi />
      <button className="btn btn-primary">Zamów</button>
    </div>
  );
};

export default Cart;
