function primeraTarea() {
  return Promise.resolve(10);
}

function segundaTarea(valor) {
  return Promise.resolve(valor * 2);
}

function terceraTarea(valor) {
  return Promise.resolve(valor + 5);
}

primeraTarea()
  .then((resultado1) => segundaTarea(resultado1))
  .then((resultado2) => terceraTarea(resultado2))
  .then((resultadoFinal) => console.log(`Resultado final: ${resultadoFinal}`))
  .catch((error) => console.error(error));
