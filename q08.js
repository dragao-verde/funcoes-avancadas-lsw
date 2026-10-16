/*
Crie a função de alta ordem aplicarOperacao(a, b, operacao),
que recebe dois números e uma função, e retorna o resultado
de operacao(a, b). Teste passando uma função de soma, uma
de multiplicação e uma arrow function de subtração escrita
diretamente na chamada.

ENTRADA DE EXEMPLO
a = 8
b = 2
operações: soma,
multiplicação e
subtração
*/

function aplicarOperacao(a, b, operacao) {
  return operacao(a, b);
}

function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

console.log(aplicarOperacao(8, 2, somar));
console.log(aplicarOperacao(8, 2, multiplicar));
console.log(aplicarOperacao(8, 2, (a, b) => a - b));