//lenght
let texto = "      Oi eu sou o Bruno"
let texto2 = "Convertendo essa string de texto em array"
console.log(texto.length)

//indexof - localiza a posição da string e saber se algo existe
console.log(texto.indexOf("sou"))

console.log(texto.indexOf("joao")) // se retornar -1 pois não existe a palavra

//slice - captura uma parte do texto
//ele não altera nada no texto original, apenas coleta a informção desejada
let palavra = texto.slice(0,3)
console.log(palavra);
console.log(texto);

//.trim() - remover espacoes em brancos no começo ou no final da string
console.log(texto.trim());

//split - permite converter uma string para uma array
console.log(texto2.split(" ")); //colocar por exemploe "com espaço" para separar as palavras
console.log(texto2.split("a")); //podendo ser colocado qualquer caracteres

//replace - permite trocar codigo
console.log(texto.replace("Bruno","Pin")); // deve informar primeiro qual a palavra que deseja trocar e depois a , para qual deseja inserir

// //function substituicaoRapida(){
//     let textoNovo = substituicaoRapida('Boa tarde','tarde','noite'.trim("tarde"));
//     console.log(textoNovo);
//  //  }

   //console.log(substituicaoRapida)


let texto3 = "Olá, sou Carlos!";
let nomeUsuario = texto3.slice(9,15);
console.log(nomeUsuario)

function menciona(texto,palavra)
return texto.indexOf(palavra)