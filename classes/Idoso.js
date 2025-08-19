// d) Criatura Personalizada (classes/[Nome].js)
// • Crie uma classe única (ex: Mago, Sereia, Lobisomem).
// • Atributos/Métodos:
// o Defina um ataqueMagico criativo.
// o Sobrescreva agir() com uma ação temática e custo de energia personalizado.

// 5 de dano, pode atacar 5 vezes
const Criatura = require('./Criatura.js');

class Idoso extends Criatura {

    constructor(nome, ataqueMagico){
    super(nome,ataqueMagico);
    this.nome = nome;
    this.ataqueMagico = `Chacoalhar das vozes trêmulas`;
    }

    agir(valor){
        valor = -50;
        this.alterarEnergia(valor);
        return `${this.nome} tenta atacar com "${this.ataqueMagico}"!`;
    }
}

module.exports = Idoso;