//Crie uma classe "aluno"
//Ela deve ter três propriedades: nome, idade e notas
//Adicionar notas, calcular média, escrever
//Crie uma instancia com valores de exemplo

class aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.notas = [];
    }
    //Adicionar nota
    adicionarNota(nota) {
        this.notas.push(nota);
    }
    //Calcular média
    calcularMedia() {
        const soma = this.notas.reduce((acc,nota) => acc + nota, 0);
        return soma / this.notas.length;
    }
    descrever() {
        const media = this.notas.length ? this.calcularMedia().toFixed(2) : 0;
    return `Nome: ${this.nome}, Idade: ${this.idade}, Média das notas: ${media}`
    }
}

//Instancia para mostrar ao usuario
const aluno1 = new aluno('Carlos', 20);
aluno1.adicionarNota(8);
aluno1.adicionarNota(9);
aluno1.adicionarNota(7);
console.log(aluno1.descrever());