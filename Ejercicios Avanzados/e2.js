function divide(a, b) {
  if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  return a / b;
}

try {
  const resultado = divide(10, 0);
  console.log(`Resultado: ${resultado}`);
} catch (error) {
  console.error(error.message);
}
