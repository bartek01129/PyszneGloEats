const API_URL = 'http://localhost:8080/auth/login';

export const login = async (username, password) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Login failed');
    }
  } catch (err) {
    console.error(err);
  }
};
