import { useEffect, useState } from 'react';

export const CartApi = () => {
  const token = localStorage.getItem('token');
  const tokenPayload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const name = decodedPayload.sub;

  const [menuItems, setMenuItems] = useState([]);

  const API_URL = `http://localhost:8080/guest/getCart/${name}`;

  function getImage(imgName) {
    return new URL(`../../../assets/products/${imgName}.jpg`, import.meta.url)
      .href;
  }

  useEffect(() => {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setMenuItems(data.menuItems))
      .catch((error) => console.error(error));
  }, [token, API_URL]);

  return (
    <div className="container-fluid cartContainer">
      <table>
        <thead>
          <th>zdjęcie</th>
          <th>nazwa produktu</th>
          <th>opis</th>
          <th>cena</th>
          <th></th>
        </thead>
        <tbody>
          {menuItems.map((item) => {
            return (
              <tr className="productRow" key={item.id}>
                <td>
                  <img
                    className="productImage"
                    src={getImage(item.productName)}
                  />
                </td>
                <td>{item.productName}</td>
                <td>{item.description}</td>
                <td>{item.price} zł</td>
                <td>
                  <i className="bi bi-trash"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
