// Mensagem de saudaçâo
function saudacao(nome: string): string {
    return "Olá " + nome + ", Segue abaixo o resultado da sua operação";
};

const nomeUsuario: string = "Júlio";
const mensagemSaudacao: string = saudacao(nomeUsuario);
console.log(mensagemSaudacao);

// Operação de multiplicação

const calculaMultiplica = (a: number, b: number): number => a * b;

const resultado = calculaMultiplica(4, 10);
console.log(resultado);
