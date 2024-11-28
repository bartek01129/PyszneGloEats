export const prepareOrder = async (id) => {
  const token = localStorage.getItem('token');

  try {
    const API_URL = `http://localhost:8080/waiter/prepareOrder/${id}`;
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      window.location.reload();
    } else {
      throw new Error('Failed to prepare order');
    }
  } catch (e) {
    throw new Error(e);
  }
};
