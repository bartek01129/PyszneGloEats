const API_URL = `http://localhost:8080/auth/register`;

export const Register = async (email, name, password) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, name, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data);
    } else {
      throw new Error('Failed to register');
    }
  } catch (e) {
    console.log('Error ' + e);
  }
};
``;
