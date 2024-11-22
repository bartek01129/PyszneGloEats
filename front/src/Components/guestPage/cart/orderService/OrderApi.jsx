export const CreateOrder = async () => {
  const token = localStorage.getItem('token');
  const tokenPayload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const username = decodedPayload.sub;

  const API_URL = `http://localhost:8080/guest/createOrder/${username}`;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error('Failed to create order');
    }
  } catch (err) {
    throw new Error(err);
  }
};
