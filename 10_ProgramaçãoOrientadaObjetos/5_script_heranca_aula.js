//Crie a classe animal
//Atributos: nome, idade e tipo
//Metodo  animal para descrever
//Crie a instancia cachorro para exibir resultados

class animal { //definindo a classe
    constructor(nome, idade, tipo) { //definindo os atributos
        this.nome = nome;  //estabelecendo os atributos
        this.idade = idade; //estabelecendo os atributos
        this.tipo = tipo;  //estabelecendo os atributos
    }
    //Criando o método/descrever
    descrever() {
        return `Nome: ${this.nome}, idade: ${this.idade}, tipo: ${this.tipo}`;
    }
}
//Criando classe cachorro
class cachorro extends animal {
    constructor(nome, idade, raca) {
        super(nome, idade, 'Cachorro');
        this.raca = raca;
    }
    //Criando método para cachorro
    latir() {
        return `${this.nome} esta latindo: au au au!`;
    }
}


//Criando a instância para chamar as classes
const meuCachorro = new cachorro('Rex', 5, 'Pastor Alemão');
console.log(meuCachorro.descrever());
console.log(meuCachorro.latir());
