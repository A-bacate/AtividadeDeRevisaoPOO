const Criatura = require('./Criatura.js');

// formiga = Pisada de mil Deuses;
// Sopro do submundo
// 200
class Fada extends Criatura {

    ataqueSupremo;

    constructor(nome, ataqueMagico, ataqueSupremo){
    super(nome,ataqueMagico);
    this.nome = nome;
    this.ataqueMagico = `Pisada de Mil Deuses`;
    this.ataqueSupremo = "Sopro do Submundo";
    }

    // agir(valor){
    //     valor = -15;
    //     this.alterarEnergia(valor);
    //     return `${this.nome} ataca com ${this.ataqueMagico}!`;
    // }
}

module.exports = Formiga;