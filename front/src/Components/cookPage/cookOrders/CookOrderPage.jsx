import NavBarCook from '../NavBarCook';
import { AssignOrders } from './CookOrderApi';

const CookOrderPage = () => {
  return (
    <div className="cookBody">
      <NavBarCook />
      <AssignOrders />
    </div>
  );
};

export default CookOrderPage;
