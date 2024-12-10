const API_URL = 'http://localhost:8080/auth/login';

export const login = async (email, password, setError) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
      throw new Error('Login failed');
    }
  } catch (err) {
    console.error(err);
  }
};
