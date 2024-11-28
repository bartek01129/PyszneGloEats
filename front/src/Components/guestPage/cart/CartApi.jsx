import { useEffect, useState } from 'react';
import {
  incrementQuantity,
  decrementQuantity,
  removeItemFromCart,
} from './cartService/QuantityApi';

import { CreateOrder } from './orderService/OrderApi';

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
  const handleCreateOrder = async () => {
    await CreateOrder();
    
  };

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

  const removeItemFormCart = async (productName) => {
    await removeItemFromCart(productName);
    const updatedMenuItems = menuItems.filter(
      (item) => item.productName !== productName
    );
    setMenuItems(updatedMenuItems);
  };

  return (
    <div className="table-wrapper">
      <div className="table-responsive table-box">
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>Zdjęcie</th>
              <th>Nazwa produktu</th>
              <th>Opis</th>
              <th>Cena</th>
              <th>Ilość</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {menuItems.map((item) => {
              return (
                <tr className="productRow" key={item.id}>
                  <td className="img-wrapper">
                    <img
                      className="img-fluid cart-img"
                      src={getImage(item.productName)}
                      alt={item.productName}
                    />
                  </td>
                  <td className="text-truncate">{item.productName}</td>
                  <td className="description-cell">{item.description}</td>
                  <td className="">{item.price} zł</td>
                  <td className="">
                    <div className="d-flex justify-content-between align-items-center w-100 h-100">
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleDecrement(item.productName)}
                      >
                        -
                      </button>
                      <p className="m-0">{item.quantity}</p>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleIncrement(item.productName)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="bin">
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItemFormCart(item.productName)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="button-wrapper">
          <button
            className="btn btn-success order-button"
            onClick={() => handleCreateOrder()}
          >
            Zamów
          </button>
        </div>
      </div>
    </div>
  );
};
