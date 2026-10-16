/*
Escreva a função criarMultiplicador(fator), que retorna uma
nova função. Essa nova função recebe um número e devolve
esse número multiplicado pelo fator (closure). Crie dobrar =
criarMultiplicador(2) e triplicar = criarMultiplicador(3) e teste-as.
*/

function criarMultiplicador(fator) {
  return function(numero) {
    return numero * fator;
  };
}

const dobrar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);

console.log(dobrar(5));
console.log(triplicar(5));
console.log(dobrar(10));