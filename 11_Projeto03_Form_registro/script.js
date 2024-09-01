//Elementos
const form = document.getElementById('userForm');
const listBtn = document.getElementById('listBtn');
const usersList = document.getElementById('usersList')

//Array de usuários

let users = [];

//Adicionar usuários

function addUser(name, age, course) {
    const editingIndex = form.getAttribute('data-editing-index');

    if (editingIndex !== null) {
        // Atualiza o usuário existente
        users[editingIndex] = { name, age, course };
        form.removeAttribute('data-editing-index'); // Limpa o estado de edição
    } else {
        // Adiciona novo usuário
        users.push({ name, age, course });
    }
}

//Display de usuários configurando

function displayUsers() {
    usersList.innerHTML = '';
    users.forEach((user, index) => {
        const userHTML = `
        <div class="userItem">
            <h3>${user.name}</h3>
            <p>Idade: ${user.age}</p>
            <p>Curso: ${user.course}</p>
            <button class="deleteBtn" onclick="deleteUser(${index})">Deletar</button>
            <button class="alterarBtn" onclick="alteUser(${index})">Alterar</button>
        </div>
        `;
        usersList.insertAdjacentHTML('beforeend', userHTML);
    });
}

//Funcao para alterar os dados

function alteUser(index) {
    const user = users[index];
    document.getElementById('name').value = user.name;
    document.getElementById('age').value = user.age;
    document.getElementById('course').value = user.course;

    // Adiciona um atributo temporário ao formulário para armazenar o índice do usuário em edição
    form.setAttribute('data-editing-index', index);
}
//Funcao deletar

function deleteUser(index) {
    users.splice(index, 1);
    displayUsers();
}

//Funcao para aparecer a lista de usuarios

function toggleUsersList() {
    usersList.classList.toggle('hidden');
    if (!usersList.classList.contains('hidden')) {
        displayUsers();
    }
} 

//Formulario para adicionar os usuarios

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;
    addUser(name, age, course); //Limpa o formulario
    form.reset(); //Atualiza a lista de usuarios
});

//Botao da Listagem

listBtn.addEventListener('click', toggleUsersList);