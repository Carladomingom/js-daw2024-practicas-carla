let personas = new Map();

personas.set('Juan', 25);
personas.set('Ana', 30);
personas.set('Pedro', 20);

personas.set('Ana', 35);

for (let [edad, nombre] of personas) {
  console.log(`${nombre}: ${edad} años`);
}
