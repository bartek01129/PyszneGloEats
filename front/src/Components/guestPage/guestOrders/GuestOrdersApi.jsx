import React, { useEffect, useState } from 'react';
import './GuestOrdersPage.css';

export const GuestOrdersApi = () => {
  const tokenStorage = localStorage.getItem('token');
  const tokenPayload = tokenStorage.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const username = decodedPayload.sub;

  const [orders, setOrders] = useState([]);
  const [expandedOrders, setExpandedOrders] = useState({});

  function getImage(imgName) {
    return new URL(`../../../assets/products/${imgName}.jpg`, import.meta.url)
      .href;
  }

  const handleOpenOrder = (orderId) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  const API_URL = `${import.meta.env.VITE_GUEST_ORDERS}${username}`;

  useEffect(() => {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, [tokenStorage, API_URL]);

  return (
    <div className="table-wrapper">
      <div className="table-responsive table-box">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Imię gościa</th>
              <th scope="col">Ilość produktów na zamówieniu</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {orders.map((order) => (
              <React.Fragment key={order.id}>
                <tr className="text-center">
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
                </tr>
                {expandedOrders[order.id] && (
                  <tr className="additional-info">
                    <td colSpan="5" className="tescik">
                      <div className="info-container">
                        {order.cartItems.map((item) => (
                          <div key={item.id} className="product-info">
                            <img
                              className="productImage"
                              src={getImage(item.menuItem.productName)}
                              alt={item.menuItem.productName}
                            />
                            <p>{item.menuItem.productName}</p>
                            <p>{item.menuItem.description}</p>
                            <p>Ilość: {item.quantity}</p>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
