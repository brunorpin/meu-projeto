//Callbacks
function calcular(numero1, numero2, operacao){
    operacao(numero1, numero2)
}

function soma(numero1, numero2){
    console.log(numero1 + numero2);
}

// calcular(10, 5, soma);

// desafio - criar uma funcao callback


// function tipoServico(banho, tosa, execucao){
//     execucao(banho,tosa)
// }

// function servicoRealizado(banho, tosa){
//     console.log(pets + banho)
//     console.log(pets +  tosa)
// }

// tipoServico("esta tomando banho ", " esta tosando", servicoRealizado);


//Callbacks - 
const somar = (numeroA,numeroB) => numeroA + numeroB;

const calculadora = (numeroA,numeroB, operacao) => operacao(numeroA, numeroB)

console.log(calculadora(10,20, somar))