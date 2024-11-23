import { useEffect, useState } from 'react';
import {
  CompletOrder,
  RemoveOrderFromCook,
} from '../cookApiService/CookApiService';

export const AssignOrders = () => {
  const token = localStorage.getItem('token');
  const tokenPayload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const name = decodedPayload.sub;

  const [orders, setOrders] = useState([]);
  const [expandedOrders, setExpandedOrders] = useState({});

  const API_URL = `http://localhost:8080/cook/cookOrders/${name}`;

  useEffect(() => {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, [token, API_URL]);

  const handleOpenOrder = (orderId) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  function getImage(imgName) {
    return new URL(`../../../assets/products/${imgName}.jpg`, import.meta.url)
      .href;
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Imię gościa</th>
            <th scope="col">Ilość produktów na zamówieniu</th>
            <th scope="col">Status</th>
            <th scope="col">
              <i className="bi bi-brush"></i>
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {orders
            .filter(
              (order) => order.cook != null && order.status !== 'COMPLETED'
            )
            .map((order) => (
              <>
                <tr key={order.id}>
                  <th onClick={() => handleOpenOrder(order.id)} scope="row">
                    {order.id}
                  </th>
                  <td onClick={() => handleOpenOrder(order.id)}>
                    {order.user.name}
                  </td>
                  <td onClick={() => handleOpenOrder(order.id)}>
                    {order.cartItems.length}
                  </td>
                  <td onClick={() => handleOpenOrder(order.id)}>
                    {order.status}
                  </td>
                  <td>
                    <button
                      className="cook-icon"
                      title="Zfinalizuj zamówienie"
                      onClick={() => CompletOrder(order.id)}
                    >
                      <i className="bi bi-patch-check-fill"></i>
                    </button>{' '}
                    <button
                      className="cook-icon"
                      title="usuń"
                      onClick={() => RemoveOrderFromCook(order.id)}
                    >
                      <i className="bi bi-archive"></i>
                    </button>{' '}
                  </td>
                </tr>
                {expandedOrders[order.id] && (
                  <tr className="additional-info">
                    <td colSpan="5" className="tescik">
                      <div className="info-container">
                        {order.cartItems.map((item) => {
                          return (
                            <div key={item.id} className="product-info">
                              <img
                                className="productImage"
                                src={getImage(item.menuItem.productName)}
                              />
                              <p>{item.menuItem.productName}</p>
                              <p>{item.menuItem.description}</p>
                              <p>Ilość: {item.quantity}</p>
                            </div>
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
        </tbody>
      </table>
    </>
  );
};
