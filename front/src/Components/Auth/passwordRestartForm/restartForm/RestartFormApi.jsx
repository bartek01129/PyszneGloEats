const API_URL = import.meta.env.VITE_REGISTER_RESTART_PASSWORD;

export const RestartFormApi = async (token, newPassword, navigate) => {
  const tokenStorage = localStorage.getItem('token');
  const tokenPayload = tokenStorage.split('.')[1];
  const decodedPayload = JSON.parse(atob(tokenPayload));
  const name = decodedPayload.sub;
  console.log(name);
  console.log(newPassword);
  console.log(token);
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, token, newPassword }),
    });

    console.log(response.status);
    console.log(await response.json());

    if (response.ok) {
      console.log('asdasdsad');
      navigate('/auth/login');
    } else {
      console.log('nie udało si');
    }
  } catch (e) {
    console.log('Error ' + e);
  }
};
