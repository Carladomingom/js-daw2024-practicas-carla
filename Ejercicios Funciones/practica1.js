const recogerPalabras = () => {
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
  const palabrasUnicas = [...new Set(palabras)].sort().reverse();
  document.write('Palabras ordenadas y únicas: ' + palabrasUnicas.join(', '));
};

recogerPalabras();
