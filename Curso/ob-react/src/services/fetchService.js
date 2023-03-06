export const getAllUsers = async () => {
  let response = await fetch('https://reqres.in/api/users');
  console.log('Response: ', response);
  console.log('Status: ', response.status);
  console.log('OK: ', response.ok);
  // We return the JSON
  return response.json();
};

export const getAllPagedUsers = async (page) => {
  let response = await fetch(`https://reqres.in/api/users?page=${page}`);
  console.log('Response: ', response);
  console.log('Status: ', response.status);
  console.log('OK: ', response.ok);
  // We return the JSON
  return response.json();
};

export const getUserDetails = async (id) => {
  let response = await fetch(`https://reqres.in/api/users/${id}`);
  console.log('Response: ', response);
  console.log('Status: ', response.status);
  console.log('OK: ', response.ok);
  // We return the JSON
  return response.json();
};

export const login = async (email, password) => {
  let body = {
    email,
    password,
  };

  console.log(JSON.stringify(body));

  let response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  console.log('Response: ', response);
  console.log('Status: ', response.status);
  console.log('OK: ', response.ok);
  // We return the JSON
  return response.json();
};