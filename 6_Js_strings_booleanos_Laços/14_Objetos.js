//criando objeto

let carro = 
{
    marca: `Jeep`,
    modelo: `Renegade`,
    ano: `2024`
}

//chamando um objeto

//console.log(carro.marca)//chamando a marca do objeto
//console.log(carro.modelo)//chamando o modelo do carro


//Modificar objeto

carro.modelo = `Compass`;

//adicionar

carro[`cor`] = `Azul`;

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.cor);