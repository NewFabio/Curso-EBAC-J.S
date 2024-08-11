//Inserindo os produtos
let products = [
    {id: 1, name: 'Curso 1: ', price: 10.99, image: '_img/curso1.jpg' },
    {id: 2, name: 'Curso 2: ', price: 20.99, image: '_img/curso2.jpg' },
    {id: 3, name: 'Curso 3: ', price: 30.99, image: '_img/curso3.jpg' },
    {id: 4, name: 'Curso 4: ', price: 40.99, image: '_img/curso4.jpg' },
    {id: 5, name: 'Curso 5: ', price: 50.99, image: '_img/curso5.jpg' },
    {id: 6, name: 'Curso 6: ', price: 60.99, image: '_img/curso6.jpg' },
    {id: 7, name: 'Curso 7: ', price: 70.99, image: '_img/curso7.jpg' },
    {id: 8, name: 'Curso 8: ', price: 80.99, image: '_img/curso8.jpg' },
    {id: 9, name: 'Curso 9: ', price: 90.99, image: '_img/curso9.jpg' },
    //Para adicionar mais produtos é so adicionar mais linhas
];

let cart = []; //carrinho de compras

//Para renderizar a imagem (ou seja ela aparecer)
function renderProducts() {
    let productGrid = document.querySelector('.product-grid'); //buscando product-grid pra aparecer as imagens
    productGrid.innerHTML = ''; //falando pra buscar e deixar espaço pequeno entre elas
    products.forEach((product) => { //vai buscar os products
        let productDiv = document.createElement('div'); //vai criar as div
        productDiv.className = 'product'; //vai salvar como product
        productDiv.innerHTML = ` 
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `; //Laço pra puxar as informaçoes do produto 1-chamou imagem, 2-chamou nome, 3-chamou preço, 4-funçao pro botao
        productDiv.querySelector('img').addEventListener("click", () => addToCart(product.id));
        productGrid.appendChild(productDiv);
    });
}

function addToCart(productId) {
    let product = products.find((product) => product.id === productId);
    cart.push(product);
    renderCart();
}

function renderCart() {
    let cartTable = document.querySelector('.cart table tbody');
    cartTable.innerHTML = '';
    cart.forEach((product) =>
    {
        let cartRow = document.createElement('tr');
        cartRow.innerHTML = `
        <td>${product.name}</td>
        <td>1</td>
        <td>${product.price}</td>
        <td>${product.price}</td>
        `;
        cartTable.appendChild(cartRow);
    });
    updateTotal();
}

function updateTotal(){
    let total = cart.reduce((acc, product) => acc + product.price, 0);
    document.getElementById('total').textContent = `R$${total.toFixed(2)}`;
}

let currentProduct = 0;
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

document.getElementById('checkout').addEventListener("click", () => {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Pedido realizado com sucesso!');
        cart = [];
        renderCart();
    }
});

renderProducts();
