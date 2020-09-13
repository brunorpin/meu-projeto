let pessoa = ["Bruno", 30, 1.78, "Bruno"];

//push - adiciona informação no final da array
pessoa.push("Ricardo");
console.log(pessoa);

//pop - retira o ultimo elemento da array
let excluido = pessoa.pop();
console.log(excluido);

//unshift - ele adiciona o elemento no começo do array
pessoa.unshift(30);
console.log(pessoa);

//shift - ele remove o primeiro elemento da array
pessoa.shift();
console.log(pessoa);

//indexOf - vai procurar um elemento na array - OBS tem que ser exatamente igual, senao ele retorna -1, pois não encontrou a posição
console.log(pessoa.indexOf(1.78));

//lastIndexOf - procurar um elemento na array, de trás para frente
console.log(pessoa.lastIndexOf("Bruno"));

//join - transforma um array em uma string
console.log(pessoa.join("-")); //posso definir como ele irá separar os dados da array