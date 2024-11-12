import { useEffect, useState } from 'react';
import './GuestPage.css';

const API_URL = 'http://localhost:8080/guest/getAll';

export const GuestApi = () => {
  const token = localStorage.getItem('token');
  const [products, setProducts] = useState([]);

  const images = import.meta.glob('../../assets/products/*'); //pobranie zdjec w obiekcie meta.glob
  let gallery = [];

  for (const path in images) {
    const imageName = path.split('/').pop();
    const p = new URL(path, import.meta.url).href; //wyciagniecie elementow z images i nadanie im url
    gallery.push({ imageName, p });
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
        const productImageName =
          product.productName.replace(/%20/g, '') + '.jpg';
        const matchesImage = gallery.find(
          (image) => image.imageName === productImageName
        );
        return (
          <div key={product.id} className="card" style={{ width: '15rem' }}>
            <img
              className="card-img-top"
              src={matchesImage.p}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{product.productName}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">{product.price}</p>
              <a href="#" className="btn btn-primary">
                Dodaj do koszyka
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
