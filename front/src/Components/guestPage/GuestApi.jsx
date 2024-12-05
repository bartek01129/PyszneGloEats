import { useEffect, useState } from 'react';
import { AddToCartApi } from './cart/cartService/AddToCartApi';
import { ModalReceiver } from '../waiterPage/waiterService/WaiterService';

export const GuestApi = () => {
  const token = localStorage.getItem('token');
  const tokenPayload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const username = decodedPayload.sub;

  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');

  ModalReceiver(username, setMessage, token);

  const handleAddToCart = async (value, quantity) => {
    await AddToCartApi(value, quantity);
  };

  function getImage(imgName) {
    return new URL(`../../assets/products/${imgName}.jpg`, import.meta.url)
      .href;
  }

  const incrementQuantity = (name) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.productName === name
          ? { ...product, quantity: (product.quantity || 1) + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (name) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.productName === name
          ? {
              ...product,
              quantity: product.quantity > 1 ? product.quantity - 1 : 1,
            }
          : product
      )
    );
  };

  const API_URL = `http://localhost:8080/guest/getUsersMenuItems/${username}`;
  useEffect(() => {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.map((product) => ({
            ...product,
            quantity: 1,
          }))
        )
      )
      .catch((error) => console.error(error));
  }, [token, API_URL]);

  return (
    <div className="container-fluid product-container">
      <div className="row g-5 m-1">
        {products.map((product) => {
          return (
            <div className="col-md-6 col-sm-12" key={product.id}>
              <div className="row row-card">
                <div className="col-10 col-xs-12 info-box">
                  <div className="row ">
                    <div className="col-8  card-name">
                      {product.productName}
                    </div>
                    <div className="col-4 card-price">{product.price}</div>
                  </div>
                  <div className="row">
                    <div className="col-8  card-desc">
                      {product.description}
                    </div>
                    <div className="col-4  card-quan">
                      <div className="que-box">
                        <button
                          href="#"
                          className="que-button"
                          onClick={() => decrementQuantity(product.productName)}
                        >
                          <i className="bi bi-dash"></i>
                        </button>
                        <p className="quantity">{product.quantity}</p>
                        <button
                          href="#"
                          className="que-button"
                          onClick={() => incrementQuantity(product.productName)}
                        >
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                      <button
                        className="bag-button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(
                            product.productName,
                            product.quantity
                          );
                        }}
                      >
                        <i className="bi bi-bag-plus-fill"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-2 p-0 img d-flex justify-content-end img-box">
                  <img
                    className="img-fluid img-card"
                    src={getImage(product.productName)}
                    alt="Card image cap"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
