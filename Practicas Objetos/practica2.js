Array.prototype.media = function () {
  if (this.length === 0) return 0;
  return this.reduce((sum, value) => sum + value, 0) / this.length;
};

console.log('\n**Pruebas de la práctica 2**');

let arr = [10, 20, 30, 40, 50];
console.log('Array:', arr);
console.log('Media:', arr.media());

let arrVacio = [];
console.log('Array vacío:', arrVacio);
console.log('Media:', arrVacio.media());

let arrUno = [100];
console.log('Array con un elemento:', arrUno);
console.log('Media:', arrUno.media());
