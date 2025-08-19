const Criatura = require(`./classes/Criatura`)
const Fada = require(`./classes/Fada`)

let fada = new Fada("teste");
fada.setEnergia(100);

console.log(`\n\n`);
// inicio

console.log(fada.agir());
console.log(fada.getEnergia());

console.log(fada.descansar());
console.log(fada.getEnergia());


// fim
console.log(`\n\n`);