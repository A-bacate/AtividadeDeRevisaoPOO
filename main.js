// ARQUIVO PRINCIPAL (main.js)
// 1. Importe todas as classes de criaturas.
// o Crie instâncias: Fada, Dragão, Gnomo e de sua criatura personalizada.
// 2. Execute:
// o Chame agir() para todas as criaturas.
// o Chame descansar() para todas as criaturas.

const Criatura = require(`./classes/Criatura`)
const Fada = require(`./classes/Fada`)
const Dragao = require(`./classes/Dragao`)
const Gnomo = require(`./classes/Gnomo`)
const Idoso = require(`./classes/Idoso`)

let fada = new Fada("Xislaine");
fada.setEnergia(100);

let dragao = new Dragao("Caderno");
dragao.setEnergia(100);

let gnomo = new Gnomo("Gerson");
gnomo.setEnergia(100);

let idoso = new Idoso("Adalberto");
idoso.setEnergia(100);

console.log(`\n\n`);
// inicio

// fada
console.log(fada.agir());
console.log(`-> Energia: ${fada.getEnergia()}`);
console.log(fada.descansar());
console.log(`-> Energia: ${fada.getEnergia()}`);
//
console.log(`\n`);
// dragao
console.log(dragao.agir());
console.log(`-> Energia: ${dragao.getEnergia()}`);
console.log(dragao.descansar());
console.log(`-> Energia: ${dragao.getEnergia()}`);
//
console.log(`\n`);
// gnomo
console.log(gnomo.agir());
console.log(`-> Energia: ${gnomo.getEnergia()}`);
console.log(gnomo.descansar());
console.log(`-> Energia: ${gnomo.getEnergia()}`);
//
console.log(`\n`);
// idoso
console.log(idoso.agir());
console.log(`-> Energia: ${idoso.getEnergia()}`);
console.log(idoso.descansar());
console.log(`-> Energia: ${idoso.getEnergia()}`);
//

// fim
console.log(`\n\n`);