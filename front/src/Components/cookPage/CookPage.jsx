import { GetOrders } from './CookApi';
import NavBarCook from './NavBarCook';

const CookPage = () => {
  return (
    <div className="cookBody">
      <NavBarCook />
      <GetOrders />
    </div>
  );
};

export default CookPage;
