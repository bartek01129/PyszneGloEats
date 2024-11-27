import { NavBarWaiter } from './navBarWaiter/NavBarWaiter.jsx';
import { WaiterOrders } from './WaiterApi';

const WaiterPage = () => {
  return (
    <div className="waiterBody">
      <NavBarWaiter />
      <WaiterOrders />
    </div>
  );
};

export default WaiterPage;
