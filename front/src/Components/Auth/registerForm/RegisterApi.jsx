const API_URL = import.meta.env.VITE_REGISTE;

export const Register = async (email, name, password, navigate, setWarning) => {
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
      navigate('/auth/login');
    } else {
      throw new Error('Failed to register');
    }
  } catch (e) {
    setWarning(true);
    setTimeout(() => {
      setWarning(false);
    }, 5000);
    console.log('Error ' + e);
  }
};
