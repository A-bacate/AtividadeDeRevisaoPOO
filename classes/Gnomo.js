// c) Gnomo (classes/Gnomo.js)
// • constructor(nome):
// o Define ataqueMagico = "Chuva de Cogumelos Tóxicos".
// • Sobrescreva agir():
// o Exiba "[nome] invoca [ataqueMagico]!".
// o Reduza #energia em 5.

const Criatura = require('./Criatura.js');

class Gnomo extends Criatura {

    constructor(nome, ataqueMagico){
    super(nome,ataqueMagico);
    this.nome = nome;
    this.ataqueMagico = `Chuva de Cogumelos Tóxicos`;
    }

    agir(valor){
        valor = -5;
        this.alterarEnergia(valor);
        return `${this.nome} ataca com ${this.ataqueMagico}!`;
    }
}

module.exports = Gnomo;