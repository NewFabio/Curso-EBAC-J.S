//Crie uma classe pessoa
//Atributos privados: nome, idade
//Atributos: getnome, getidade, setnome, setidade
//Crie instancia para devolver os valores

//Definindo classe pessoa
class pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    //Definindo métodos
    getnome() {
        return this._nome;
    }
    getidade() {
        return this._idade;
    }
    setnome(novonome) {
        this._nome = novonome;
    }
    setidade(novaidade) {
        this._idade = novaidade;;
    }
}

const pessoa1 = new pessoa('Pedro', 25);
console.log(`Nome: ${pessoa1.getnome()}, idade: ${pessoa1.getidade()}`);

pessoa1.setnome('Maria');
pessoa1.setidade('32');
console.log(`Nome: ${pessoa1.getnome()}, idade: ${pessoa1.getidade()}`);