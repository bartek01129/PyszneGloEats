import { useEffect, useState } from 'react';
import './GuestPage.css';
import { AddToCartApi } from './cart/cartService/AddToCartApi';

export const GuestApi = () => {
  const tokenStorage = localStorage.getItem('token');
  const tokenPayload = tokenStorage.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const username = decodedPayload.sub;

  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    const fetchProductsWithQuantity = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/guest/getUsersMenuItems/${username}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${tokenStorage}`,
            },
          }
        );
        const data = await response.json();

        const productsWithQuantities = await Promise.all(
          data.map(async (product) => {
            const quantityResponse = await fetch(
              `http://localhost:8080/guest/getQuantity/${username}/${product.productName}`,
              {
                method: 'GET',
                headers: {
                  Authorization: `Bearer ${tokenStorage}`,
                },
              }
            );
            const quantityData = await quantityResponse.json();
            return {
              ...product,
              quantity: quantityData || 1,
            };
          })
        );

        setProducts(productsWithQuantities);
      } catch (error) {
        console.error('Error fetching products or quantities:', error);
      }
    };

    fetchProductsWithQuantity();
  }, [tokenStorage, username]);

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
              <div className="quantity">
                <button
                  href="#"
                  className="btnQ"
                  onClick={() => decrementQuantity(product.productName)}
                >
                  -
                </button>
                <p className="cardQ">{product.quantity}</p>
                <button
                  href="#"
                  className="btnQ"
                  onClick={() => incrementQuantity(product.productName)}
                >
                  +
                </button>
              </div>
              <a
                href="#"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(product.productName, product.quantity);
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
