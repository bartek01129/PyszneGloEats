import { useEffect, useState } from 'react';
import './GuestPage.css';
import { AddToCartApi } from './cart/cartService/AddToCartApi';

const API_URL = 'http://localhost:8080/guest/getAll';

export const GuestApi = () => {
  const token = localStorage.getItem('token');
  const [products, setProducts] = useState([]);

  const handleAddToCart = async (value) => {
    await AddToCartApi(value);
    console.log(`Added ${value} to cart`);
  };

  function getImage(imgName) {
    return new URL(`../../assets/products/${imgName}.jpg`, import.meta.url)
      .href;
  }
  useEffect(() => {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, [token]);
  return (
    <div className="container-fluid product-container">
      {products.map((product) => {
        return (
          <div key={product.id} className="card" style={{ width: '15rem' }}>
            <img
              className="card-img-top"
              src={getImage(product.productName)}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">{product.price}</p>
              <a
                href="#"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(product.productName);
                }}
              >
                Dodaj do koszyka
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
