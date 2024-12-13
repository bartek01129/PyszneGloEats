export const AddToCartApi = async (productName, quantity) => {
  const tokenStorage = localStorage.getItem('token');
  const tokenPayload = tokenStorage.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const username = decodedPayload.sub;

  const API_URL = import.meta.env.VITE_GUEST_ADD_TO_CART;
  try {
    const respone = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productName, username, quantity }),
    });

    if (respone.ok) {
      const data = await respone.json();
      console.log(data + 'udało się');
    }
  } catch (err) {
    console.log('error: ' + err);
  }
};
