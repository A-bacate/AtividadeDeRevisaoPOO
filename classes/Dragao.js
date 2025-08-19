// b) Dragão (classes/Dragao.js)
// • constructor(nome):
// o Define ataqueMagico = "Sopro de Fogo Infernal".
// • Sobrescreva agir():
// o Exiba "[nome] lança [ataqueMagico]!".
// o Reduza #energia em 30.

// 40 de dano, pode atacar 1 vez
const Criatura = require('./Criatura.js');

class Dragao extends Criatura {

    constructor(nome, ataqueMagico){
    super(nome,ataqueMagico);
    this.nome = nome;
    this.ataqueMagico = `Sopro de Fogo Infernal`;
    }

    agir(valor){
        valor = -30;
        this.alterarEnergia(valor);
        return `${this.nome} ataca com ${this.ataqueMagico}!`;
    }
}

module.exports = Dragao;