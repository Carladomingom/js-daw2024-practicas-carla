const BASE_URL = 'https://reqres.in/api/users/';
const POSTMAN_URL = 'https://httpbin.org/post';

window.addEventListener('load', (ev) => {
  let numsecs = document.getElementById('numsecs');
  let user = document.getElementById('user');
  let boton = document.querySelector('button');

  boton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
  });
}

async function procesarFetch(numsecs, user) {
  try {
    if (isNaN(user) || user > 12 || user < 1) {
      throw new Error('Número de usuario no válido (debe ser entre 1 y 12)');
    }

    const response = await fetch(`${BASE_URL}${user}?delay=${numsecs}`);
    if (!response.ok) {
      throw new Error(`Error al obtener usuario: ${response.status}`);
    }
    const data = await response.json();

    document.getElementById('id').innerHTML = data.data.id;
    document.getElementById('email').innerHTML = data.data.email;

    const postResponse = await fetch(POSTMAN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.data),
    });

    if (!postResponse.ok) {
      throw new Error(`Error en el POST: ${postResponse.status}`);
    }

    const postData = await postResponse.json();

    document.getElementById('name').innerHTML = postData.json.first_name;

    document.getElementById('status').innerHTML = postResponse.status;
  } catch (error) {
    console.error('Error:', error.message);
    document.getElementById('status').innerHTML = error.message;
  }
}
