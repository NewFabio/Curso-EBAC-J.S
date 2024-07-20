//Declarar uma funçao

function calcular_area(raio) {
    const pi = 3.14159;
    return pi * raio * raio;
}

let raio = 5;
let area = calcular_area(raio);
console.log(`A área do circulo é de ${area} sendo que seu raio é de ${raio}.`);

//As funções são blocos de código reutilizáveis que realizam uma tarefa específica quando chamados. Elas ajudam a organizar o código, tornando-o mais modular e mais fácil de entender e manter.

//As funções podem receber argumentos como entrada, executar operações com base nesses argumentos e, opcionalmente, retornar um valor como resultado.

//Sintaxe:

//function nomeDaFuncao(parametro1, parametro2, ...) {

// Bloco de código a ser executado

// Instruções e operações

//return valorDeRetorno; // Opcional

//}



//Palavra-chave function: Indica o início da declaração de uma função.

//nomeDaFuncao: O nome da função, usado para chamá-la posteriormente. Deve seguir as regras de nomenclatura de identificadores (sem espaços, não pode começar com números, etc.).

//Parâmetros: (parametro1, parametro2, ...) são variáveis que a função espera receber quando for chamada. Parâmetros são opcionais; uma função pode ter zero ou mais parâmetros.

//Bloco de código: { ... } contém as instruções que definem o que a função faz. Este bloco é executado sempre que a função é chamada.

//return: A instrução return especifica o valor que a função retorna ao final de sua execução. Se omitido, a função retorna undefined por padrão.





//Declaração de funções: Usamos a palavra-chave function para definir uma função, nomeamos a função e especificamos os parâmetros que ela espera receber.
//Corpo da função: Contém as instruções que a função executa. Pode incluir declarações de variáveis, cálculos e a instrução return para devolver um valor.
//Chamando funções: Invocamos a função pelo nome, passando os argumentos necessários. O valor retornado pela função pode ser armazenado em uma variável.
//Exibindo resultados: Usamos console.log para imprimir valores no console, e a interpolação de strings para formar mensagens que incluem variáveis.