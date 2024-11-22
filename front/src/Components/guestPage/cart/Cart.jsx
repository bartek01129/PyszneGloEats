import { CartApi } from './CartApi';
import './Cart.css';
import { CreateOrder } from './orderService/OrderApi';

const handleCreateOrder = async () => {
  await CreateOrder();
};
const Cart = () => {
  return (
    <div className="cartBody">
      <h1>koszyk</h1>
      <CartApi />
      <button className="btn btn-primary" onClick={() => handleCreateOrder()}>
        Zamów
      </button>
    </div>
  );
};

export default Cart;
