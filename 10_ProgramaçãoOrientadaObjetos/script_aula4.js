//Criar a classe livro com 3 atributos
//Titulo, auto e numero de paginas
//Adicionar os métodos
// Descrever, e atribuir páginas

class livro {
    constructor(titulo, autor, npaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.npaginas = npaginas;
    }
    //Método descrever para colocar as informações nos atributos
    descrever() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Número de páginas: ${this.npaginas}`;
    }
    //Método para atualizar paginas
    atualizarNpaginas(novonumero) {
        this.npaginas = novonumero;
    }
}

const meulivro = new livro('A revolução do código', 'Fabio Conceição', 300);
console.log(meulivro.descrever());