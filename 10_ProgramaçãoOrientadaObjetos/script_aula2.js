//OBJETIVOS
//Criar uma classe chamada retangulo
//ela deve conter as propriedades: Largura e Altura
//Crie um método para calcular área

//Criando a classe retangulo
class retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    //Método para calcular área
    calcularArea() {
        return this.largura * this.altura;
    }
}

//Instância da classe retangulo que chama o método calcularArea e retorna para o usuário a área.
const meuRetangulo = new retangulo(5, 3);
console.log(meuRetangulo.calcularArea());; //retorno para o usuário na tela