//for in - coleta as informações do objet, correndo para cada produto
let carro = {
    nome: "fox",
    ano: "2011"
}

for(let propriedade in carro){
    console.log(carro[propriedade])
}

console.log(" ")

//for of - utilizar para integrar em arrays
let series = ["Friends", "Game of Thrones", "Breaking Bad"];
for(let valor of series){
    console.log(valor)
}