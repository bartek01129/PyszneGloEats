import { AdminApi } from './AdminApi';
import './AdminPage.css';
import { NavBarAdmin } from './navBarAdmin/NavBarAdmin';

const AdminPage = () => {
  return (
    <div className="adminBody">
      <NavBarAdmin />
      <AdminApi />
    </div>
  );
};

export default AdminPage;
