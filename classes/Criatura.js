// CLASSE BASE
// Criatura
// Arquivo: classes/Criatura.js
// Atributos:
// • nome (público).
// • ataqueMagico (público).
// • #energia (privado, valor inicial = 100).

// Métodos:
// • constructor(nome, ataqueMagico):
// o Inicializa os atributos.
// • alterarEnergia(valor):
// o Modifica #energia e exibe: "[nome] agora tem [energia] de energia.".

// • agir():
// o Padrão: Exibe "[nome] usa [ataqueMagico]!" e reduz #energia em 10.

// • descansar():
// o Padrão: Recupera 15 de #energia e exibe "[nome] descansou. Energia restaurada!".

class Criatura {
    //atributos
    nome;
    ataqueMagico;
    #energia;

    constructor(nome,ataqueMagico,energia){
        this.nome = nome;
        this.ataqueMagico = ataqueMagico;
        this.#energia = energia;
    }
    // getters and seters

    getEnergia(){
        return this.#energia;
    }
    setEnergia(energia){
        this.#energia = energia;
    }

    // métodos
    alterarEnergia(valor){
        this.#energia += valor;
        return `${this.nome} agora tem ${this.#energia} de energia.`
    }

    agir(valor){
        valor = -10;
        this.alterarEnergia(valor);
        return `${this.nome} usa ${this.ataqueMagico}!`;
    }

    descansar(valor){
        valor = 15;
        this.alterarEnergia(valor);
        return `${this.nome} descansou. Energia restaurada!`;        
    }
}
 module.exports = Criatura


