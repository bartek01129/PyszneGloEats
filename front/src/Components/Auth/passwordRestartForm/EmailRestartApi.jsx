export const EmailRestartApi = async (email) => {
  const API_URL = `http://localhost:8080/auth/restartPasswordMail?email=${email}`;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error('Failed to send message');
    }
  } catch (e) {
    console.log('Error ' + e);
  }
};
