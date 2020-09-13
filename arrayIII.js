let numerosPares = [2,4,6,8,10];

//map - aplicando uma regra para todos, sem perder nenhum dado da array
let numerosParesDobro = numerosPares.map(function(valor){
    return valor *2;
})

console.log(numerosParesDobro)


//filter - filtrar as informações do array
let numerosFiltrados = numerosPares.filter(function(valor){
    return valor < 6;
})
console.log(numerosFiltrados)

//reduce - pegar nossa array e converter em um unico valor
let somaPares = numerosPares.reduce(function(acum, valor){
    return acum + valor;
})
console.log(somaPares);

//forech passar por cada elemento
numerosPares.forEach(function(valor, indice){
    console.log("O indice " + indice + " tem o valor: " + valor)
})