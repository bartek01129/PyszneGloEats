import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/admin/getUsers';

const roleOption = ['ROLE_ADMIN', 'ROLE_GUEST', 'ROLE_COOK', 'ROLE_WAITER'];

export const AdminApi = () => {
  const token = localStorage.getItem('token');
  const [users, setUsers] = useState([]);

  const updateRole = (id, role) => {
    const API_URL_UPDATE = `http://localhost:8080/admin/update/${id}/${role}`;

    fetch(API_URL_UPDATE, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  const handleRoleChange = (id, e) => {
    const selectedRole = e.target.value;
    updateRole(id, selectedRole);
    window.location.reload();
  };

  useEffect(() => {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, [token]);

  return (
    <div className="table-wrapper">
      <div className="table-responsive table-box">
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Role</th>
              <th>
                <i className="bi bi-person-workspace"></i>
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => {
              return (
                <tr className="productRow" key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="role-wrapper">
                    <select
                      name="role"
                      id="role"
                      onChange={(e) => handleRoleChange(user.id, e)}
                      className="styled-select"
                    >
                      <option value="">Zmien role uzytkownika</option>
                      <option value={roleOption[0]}>ROLE_ADMIN</option>
                      <option value={roleOption[1]}>ROLE_GUEST</option>
                      <option value={roleOption[2]}>ROLE_COOK</option>
                      <option value={roleOption[3]}>ROLE_WAITER</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
