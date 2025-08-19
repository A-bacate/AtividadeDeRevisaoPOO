// a) Fada (classes/Fada.js)
// • constructor(nome):
// o Define ataqueMagico = "Bola de Luz Arco-Íris".
// • Sobrescreva agir():
// o Exiba "[nome] ataca com [ataqueMagico]!".
// o Reduza #energia em 15.

const Criatura = require('./Criatura.js');

class Fada extends Criatura {

    constructor(nome, ataqueMagico){
    super(nome,ataqueMagico);
    this.nome = nome;
    this.ataqueMagico = `Bola de Luz Arco-íris`;
    }

    agir(valor){
        valor = -15;
        this.alterarEnergia(valor);
        return `${this.nome} ataca com ${this.ataqueMagico}!`;
    }
}

module.exports = Fada;