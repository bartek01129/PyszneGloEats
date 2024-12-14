export const EmailRestartApi = async (email, navigate, setError) => {
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
      navigate(`/auth/restartPassword`);
    } else {
      throw new Error('Failed to send message');
    }
  } catch (e) {
    console.log('Error ' + e);
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 10000);
  }
};
