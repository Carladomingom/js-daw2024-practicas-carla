const numeros = [1, 2, 3, 4, 5];

function sumaIterativa(arr) {
  let suma = 0;
  for (let num of arr) {
    suma += num;
  }
  return suma;
}

// Suma recursiva
function sumaRecursiva(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumaRecursiva(arr.slice(1));
}

console.log('Suma iterativa:', sumaIterativa(numeros));
console.log('Suma recursiva:', sumaRecursiva(numeros));
