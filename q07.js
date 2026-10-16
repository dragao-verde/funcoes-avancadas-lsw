/*
Escreva como arrow functions com retorno implícito:
dobrar(numero), que retorna o dobro do número; somar(a, b),
que retorna a soma; e saudar(), sem parâmetros, que retorna
"Bem-vindo ao ADS!". Teste cada uma.
*/

const dobrar = numero => numero * 2;
const somar = (a, b) => a + b;
const saudar = () => "Bem-vindo ao ADS!";

console.log(dobrar(7));
console.log(somar(4, 6));
console.log(saudar());