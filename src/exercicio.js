"use strict";
// Mensagem de saudaçâo
function saudacao(nome) {
    return "Olá " + nome + ", Segue abaixo o resultado da sua operação";
}
;
const nomeUsuario = "Júlio";
const mensagemSaudacao = saudacao(nomeUsuario);
console.log(mensagemSaudacao);
// Operação de multiplicação
const calculaMultiplica = (a, b) => a * b;
const resultado = calculaMultiplica(4, 10);
console.log(resultado);
