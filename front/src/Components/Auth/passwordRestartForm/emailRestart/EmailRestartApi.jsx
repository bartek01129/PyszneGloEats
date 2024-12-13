export const EmailRestartApi = async (email, navigate) => {
  const API_URL = `${
    import.meta.env.VITE_REGISTER_RESTART_MAIL
  }?email=${email}`;

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
      navigate(`/auth/restartPassword`);
      return data;
    } else {
      throw new Error('Failed to send message');
    }
  } catch (e) {
    console.log('Error ' + e);
  }
};
