import { useEffect, useState } from 'react';
import './WaiterPage.css';

export const WaiterOrders = () => {
  const token = localStorage.getItem('token');

  const API_URL = import.meta.env.VITE_WAITER_ORDERS;

  const [orders, setOrders] = useState([]);
  const [expandedOrders, setExpandedOrders] = useState({});
  const [loading, setLoading] = useState(false);

  const prepareOrder = async (id) => {
    setLoading(true);

    try {
      const API_URL = `${import.meta.env.VITE_WAITER_PREPARE_ORDER}${id}`;
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        window.location.reload();
      } else {
        throw new Error('Failed to prepare order');
      }
    } catch (e) {
      throw new Error(e);
    } finally {
      setLoading(false);
    }
  };

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
    return new URL(`../../assets/products/${imgName}.jpg`, import.meta.url)
      .href;
  }

  return (
    <div className="table-wrapper">
      {loading && (
        <div className="loading-overlay">
          <div className="h5 ">Twoje zamówienie jest w trakcie realizacji</div>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      )}

      <div
        className="table-responsive table-box"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
      >
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
            {orders.map((order) => (
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
                      title="przyjmij"
                      onClick={() => prepareOrder(order.id)}
                    >
                      <i className="bi bi-arrow-down-circle-fill"></i>
                    </button>
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
      </div>
    </div>
  );
};
