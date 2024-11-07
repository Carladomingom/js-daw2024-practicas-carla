const contarFrecuenciaPalabras = () => {
  let palabras = [];
  let palabra;
  while (
    (palabra = prompt(
      'Introduce una palabra (o déjalo vacío para terminar):'
    )) !== null &&
    palabra !== ''
  ) {
    palabras.push(palabra.toLowerCase());
  }

  const mapaFrecuencia = new Map();
  palabras.forEach((palabra) => {
    mapaFrecuencia.set(palabra, (mapaFrecuencia.get(palabra) || 0) + 1);
  });

  let resultado = 'Frecuencia de palabras:<br>';
  mapaFrecuencia.forEach((cantidad, palabra) => {
    resultado += `${palabra}: ${cantidad}<br>`;
  });
  document.write(resultado);
};

contarFrecuenciaPalabras();
