//do-while: Semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez, pois a condição é verificada após a execução do bloco.
//Sintaxe:

//do {
// bloco de código a ser executado
//} while (condição);

let contador = 0

do {
    console.log(`Resultado da variavel ${contador}.`)
    contador++
} while (contador < 5)