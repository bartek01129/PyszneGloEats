export const AssignOrder = async (orderID) => {
  const token = localStorage.getItem('token');
  const tokenPayload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const name = decodedPayload.sub;

  const API_URL = `http://localhost:8080/cook/order/assign/${name}/${orderID}`;

  try {
    const respone = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, orderID }),
    });

    if (respone.ok) {
      const data = await respone.json();
      if (data.status != 'CANCELLED') {
        window.location.reload();
      }
      console.log(data);
    } else {
      alert('nie możesz usuniąć anulowanego zamówienia :)');
    }
  } catch (e) {
    throw new Error(e);
  }
};

export const DelateOrder = async (orderID) => {
  const token = localStorage.getItem('token');

  const API_URL = `http://localhost:8080/cook/order/delete/${orderID}`;

  try {
    const response = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ orderID }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      window.location.reload();
    } else {
      throw new Error('nie udało się');
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const CompletOrder = async (orderID) => {
  const token = localStorage.getItem('token');

  const API_URL = `http://localhost:8080/cook/order/complete/${orderID}`;

  try {
    const response = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ orderID }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      window.location.reload();
    } else {
      throw new Error('nie udało się');
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const RemoveOrderFromCook = async (orderID) => {
  const token = localStorage.getItem('token');

  const API_URL = `http://localhost:8080/cook/order/remove/${orderID}`;

  try {
    const respone = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderID }),
    });

    if (respone.ok) {
      const data = await respone.json();
      console.log(data);
      window.location.reload();
    } else {
      console.log('błąd usunięcia');
    }
  } catch (e) {
    throw new Error(e);
  }
};
