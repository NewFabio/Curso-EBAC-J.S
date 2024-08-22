//definição de classes.

class pessoa {
    constructor(nome, idade) {
        this.nome = nome; //propriedade.
        this.idade = idade; //propriedade.
    }
    //Método/Função Complementar.
    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}
//Criando uma instância da classe pessoa.
const pessoal = new pessoa('João', 80);
pessoal.cumprimentar();