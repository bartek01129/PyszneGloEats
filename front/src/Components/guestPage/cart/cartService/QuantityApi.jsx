export const incrementQuantity = async (productName) => {
  const tokenStorage = localStorage.getItem('token');
  const tokenPayload = tokenStorage.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const username = decodedPayload.sub;

  const API_URL = `${
    import.meta.env.VITE_GUEST_INCREMENT
  }${username}/${productName}`;

  try {
    const response = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (e) {
    console.log(e);
  }
};

export const decrementQuantity = async (productName) => {
  const tokenStorage = localStorage.getItem('token');
  const tokenPayload = tokenStorage.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const username = decodedPayload.sub;

  const API_URL = `${
    import.meta.env.VITE_GUEST_DECREMENT
  }${username}/${productName}`;

  try {
    const response = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (e) {
    console.log(e);
  }
};

export const removeItemFromCart = async (productName) => {
  const tokenStorage = localStorage.getItem('token');
  const tokenPayload = tokenStorage.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const username = decodedPayload.sub;

  const API_URL = import.meta.env.VITE_GUEST_REMOVE_FROM_CART;

  try {
    const response = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, productName }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (e) {
    console.log(e);
  }
};
