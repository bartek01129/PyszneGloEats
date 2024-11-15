export const AddToCartApi = async (productName) => {
  const tokenStorage = localStorage.getItem('token');
  const tokenPayload = tokenStorage.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const username = decodedPayload.sub;

  const API_URL = 'http://localhost:8080/guest/addProducts';
  try {
    const respone = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productName, username }),
    });

    if (respone.ok) {
      const data = await respone.json();
      console.log(data + 'udało się');
    }
  } catch (err) {
    console.log('error: ' + err);
  }
};
