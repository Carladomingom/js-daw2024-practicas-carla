let paises = ['España', 'Francia', 'Alemania', 'Italia'];

for (let pais of paises) {
  console.log(pais);
}

paises.shift();

for (let pais of paises) {
  console.log(pais);
}
