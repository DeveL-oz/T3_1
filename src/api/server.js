export async function loadCities() {
  const response = await fetch('https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/cities ');
  const cities = await response.json();
  return cities;
}

export async function request() {
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const fetchResponse = await fetch('https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/send-form', settings);
  const data = await fetchResponse.json();
  return data;
}
