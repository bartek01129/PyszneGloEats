import { useEffect, useState } from 'react';
import {
  incrementQuantity,
  decrementQuantity,
} from './cartService/QuantityApi';

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
      .then((data) => setMenuItems(data))
      .catch((error) => console.error(error));
  }, [token, API_URL]);

  const handleIncrement = async (productName) => {
    const updatedMenuItems = menuItems.map((item) =>
      item.productName === productName
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setMenuItems(updatedMenuItems);

    await incrementQuantity(productName);
  };

  const handleDecrement = async (productName) => {
    const updatedMenuItems = menuItems.map((item) =>
      item.productName === productName
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setMenuItems(updatedMenuItems);

    await decrementQuantity(productName);
  };

  return (
    <div className="container-fluid cartContainer">
      <table>
        <thead>
          <th>zdjęcie</th>
          <th>nazwa produktu</th>
          <th>opis</th>
          <th>cena</th>
          <th>ilość</th>
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
                  <div className="quantity">
                    <button
                      href="#"
                      className="btnQ"
                      onClick={() => handleDecrement(item.productName)}
                    >
                      -
                    </button>
                    <p className="cardQ">{item.quantity}</p>
                    <button
                      href="#"
                      className="btnQ"
                      onClick={() => handleIncrement(item.productName)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <a href="">
                    <i className="bi bi-trash"></i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
