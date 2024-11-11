import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/admin/getUsers';

const roleOption = ['ROLE_ADMIN', 'ROLE_GUEST', 'ROLE_COOK'];

export const AdminApi = () => {
  const token = localStorage.getItem('token');
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState('');

  const updateRole = (id, role) => {
    const API_URL_UPDATE = `http://localhost:8080/admin/update/${id}/${role}`;

    fetch(API_URL_UPDATE, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };



  const handleRoleChange = (id, e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);   // PUSTY ROLE
    updateRole(id, role);
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
    <>
      <div className="userTableContainer">
        <h2>User List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>
                    <select
                      name="role"
                      id="role"
                      onChange={(e) => handleRoleChange(user.id, e)}
                    >
                      <option value="">Zmien role uzytkownika</option>
                      <option value={roleOption[0]}>ROLE_ADMIN</option>
                      <option value={roleOption[1]}>ROLE_GUEST</option>
                      <option value={roleOption[2]}>ROLE_COOK</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
