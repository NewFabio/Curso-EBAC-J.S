//selecionando os elementos para serem alterados
let titulo = document.getElementById("titulo");
let descricao = document.querySelector('.descricao');
let botao = document.getElementById('botao');

//Evento que acontece após o clique do botão

botao.addEventListener("click", alterarMensagem);
    function alterarMensagem() {
    titulo.innerHTML = 'Foi manipulado com o DOM';
    descricao.innerHTML = 'O conteúdo também foi alterado';
    titulo.classList.toggle('Highlight');
}
