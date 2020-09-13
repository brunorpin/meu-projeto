function saudacao(nome){
    let mensagem = "Ola seja bem vindo";

    function juntarNome(){
        return mensagem + ' ' + nome;
    }

    return juntarNome();
}

console.log(saudacao("Bruno"));


//é uma funcao dentro da outra, a funcao pai ela executa a funcao filha