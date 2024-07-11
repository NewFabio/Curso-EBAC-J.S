function armazenarValor(){

//armazena o valor que o usuario digitou
var userInput = document.querySelector("input#userInput").value;

//exibe o valor armazenado
console.log("O valor da variavel é: " + userInput)

//atualiza o conteudo
document.querySelector('p#valorInserido').innerText = 'O valor inserido é: '+ userInput;
}