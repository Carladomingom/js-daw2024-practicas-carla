function simulaProceso(exito) {
  return new Promise((resolve, reject) => {
    if (exito) {
      resolve('Proceso exitoso');
    } else {
      reject('Hubo un error');
    }
  });
}

simulaProceso(true)
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error));

(async () => {
  try {
    const mensaje = await simulaProceso(false);
    console.log(mensaje);
  } catch (error) {
    console.error(error);
  }
})();
