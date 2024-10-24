for (let i = 0; i < 50; i++) {
  let combinacion = [];
  while (combinacion.length < 6) {
    let numero = Math.floor(Math.random() * 49) + 1;
    if (!combinacion.includes(numero)) {
      combinacion.push(numero);
    }
  }
  console.log(
    'Combinación ' +
      (i + 1) +
      ': ' +
      combinacion.sort(function (a, b) {
        return a - b;
      })
  );
}
