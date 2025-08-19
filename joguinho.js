const Criatura = require(`./classes/Criatura`)
const Fada = require(`./classes/Fada`)
const Dragao = require(`./classes/Dragao`)
const Gnomo = require(`./classes/Gnomo`)
const Idoso = require(`./classes/Idoso`)
const prompt = require("prompt-sync")();

console.log(`\n\n`);

let personagem;

console.log("Bem vindo à °+*Criaturas Mágicas*+°\n");

//escolha personagem
console.log(`Escolha seu personagem:\nFada / Dragao / Gnomo / Idoso`);
let escolha = prompt(`--> `);
escolha = escolha.toLowerCase();
switch (escolha) {
    case "fada":
        console.log(`\nNome do personagem:`);
        personagem = new Fada(prompt(`--> `));
        console.log(`\n${personagem.nome} é uma fada!!\n`);
        break;
    case "dragao":
        console.log(`\nNome do personagem:`);
        personagem = new Dragao(prompt(`--> `));
        console.log(`\n${personagem.nome} é um dragão!!\n`);
        break;
    case "gnomo":
        console.log(`\nNome do personagem:`);
        personagem = new Gnomo(prompt(`--> `));
        console.log(`\n${personagem.nome} é um gnomo!!\n`);
        break;
    case "idoso":
        console.log(`\nNome do personagem:`);
        personagem = new Idoso(prompt(`--> `));
        console.log(`\n${personagem.nome} é um idoso!!\n`);
        break;
    default:
        console.log("\n**+Inválido!+**\n");
        return false;
        break;
}
personagem.setEnergia(100);
//

// formiga = Pisada de mil Deuses;
// Sopro do submundo
// 200

// ação
let desistir = false;
while (!desistir) {
    console.log(`\nO que ${personagem.nome} quer fazer?\nAgir / Descansar / Desistir`);
    escolha = prompt("--> ");
    escolha = escolha.toLowerCase();
    switch (escolha) {
        case "agir":
            console.log(personagem.agir());
            console.log(`-> Energia: ${personagem.getEnergia()}`);
        break;
        case "descansar":
            console.log(personagem.descansar());
            console.log(`-> Energia: ${personagem.getEnergia()}`);
        break;
        case "desistir":
            console.log(`\n*+Você desistiu (covarde)+*\n`);
            desistir = true;
        default:
            console.log("\n**+Inválido!+**\n");
    }
}
