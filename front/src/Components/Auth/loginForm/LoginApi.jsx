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
      const token = data.token;
      const tokenPayload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(tokenPayload));
      console.log(decodedPayload.aud);
      if (decodedPayload.aud == 'ROLE_GUEST') {
        console.log('GUEST');
      } else if (decodedPayload.aud == 'ROLE_ADMIN') {
        console.log('ADMIN');
      } else if (decodedPayload.aud == 'ROLE_COOK') {
        console.log('COOK');
      }
      return data;
    } else {
      throw new Error('Login failed');
    }
  } catch (err) {
    console.error(err);
  }
};
