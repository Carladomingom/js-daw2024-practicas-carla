fetch('https://randomuser.me/api/')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error al obtener datos de RandomUser');
    }
    return response.json();
  })
  .then((data) => {
    const user = data.results[0];
    const userInfo = `
      <img src="${user.picture.large}" alt="Foto de ${user.name.first}" />
      <p>Nombre: ${user.name.first} ${user.name.last}</p>
      <p>Email: ${user.email}</p>
      <p>Dirección: ${user.location.street.name} ${user.location.street.number}, ${user.location.state}</p>
    `;
    const userDiv = document.createElement('div');
    userDiv.innerHTML = userInfo;
    document.body.appendChild(userDiv);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
