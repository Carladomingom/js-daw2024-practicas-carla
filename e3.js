let data = [
  { name: 'Nacho', telephone: '966112233', age: 40 },
  { name: 'Ana', telephone: '911223344', age: 35 },
  { name: 'Mario', phone: '611998877', age: 15 },
  { name: 'Laura', telephone: '633663366', age: 17 },
];

data.push(
  { name: 'Pedro', telephone: '611944444', age: 25 },
  { name: 'Julia', phone: '633232323', age: 37 }
);

for (let dato of data) {
  console.log(dato);
}

data.sort((a, b) => a.age - b.age);

for (let dato of data) {
  console.log(dato);
}

data.sort((a, b) => a.name.localeCompare(b.name));
for (let dato of data) {
  console.log(dato);
}

let mayoresDe30 = data.filter((person) => person.age > 30);
for (let dato of data) {
  console.log(dato);
}
