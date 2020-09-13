//typeof = saber que tipo de variavel é
let texto = "abc";
let numero = 1;
console.log(typeof(texto));
console.log(typeof(numero));

//parseInt = converte string em numero. OBS se tiver texto na variavel, ele pega apenas o que for numero
let texto2 = "5";
let numero2 = parseInt(texto2);
console.log(texto2);
console.log(typeof(texto2));

//NaN - Nao consegue converter a varial que tem letras e numero para Number, apenas se realmente for numero
let texto3 = "123abc";
let numero3 = Number(texto3);
console.log(numero3);

//String() - Converter numero em texto

let numero4 = 111;
let texto4 = String(numero);

console.log(typeof(texto4));

//toString() - Converter numero em texto
let numero5 = 111;
let texto5 = numero.toString();
console.log(typeof(texto5));
