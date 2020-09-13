//destructuring - A alocação por desestruturação não modifica nem altera o array de origem
let pessoa = {
    nome: "Bruno",
    altura: 1.78,
    profissao: "Analista"
}

const {nome, altura} = pessoa;
console.log(nome);
console.log(altura);

let listaCompras = ["pao","leite","acucar"];
const [item1, item2, item3] = listaCompras;
console.log(item2);

