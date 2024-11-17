function Punto(x, y) {
  this.x = typeof x === 'number' ? x : 0;
  this.y = typeof y === 'number' ? y : 0;

  this.cambiar = function (nuevoX, nuevoY) {
    this.x = typeof nuevoX === 'number' ? nuevoX : 0;
    this.y = typeof nuevoY === 'number' ? nuevoY : 0;
  };

  this.copia = function () {
    return new Punto(this.x, this.y);
  };

  this.suma = function (otroPunto) {
    return new Punto(this.x + otroPunto.x, this.y + otroPunto.y);
  };
}

console.log('**Pruebas de la práctica 1**');

let p1 = new Punto(3, 4);
console.log('Punto inicial:', p1);

p1.cambiar(10, 15);
console.log('Coordenadas cambiadas:', p1);

let p2 = p1.copia();
console.log('Copia del punto:', p2);

let p3 = p1.suma(new Punto(5, 5));
console.log('Suma de puntos:', p3);
