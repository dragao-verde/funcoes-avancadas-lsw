/*
Um sistema enviou os dados de um produto em JSON (texto).
Converta-o para objeto com JSON.parse(), aplique 10% de
desconto no preço, diminua o estoque em 1 unidade e converta
o objeto de volta para JSON. Exiba o tipo do objeto, o JSON
final e o tipo do JSON final.
*/

const recebido = '{"produto":"Monitor","preco":900,"estoque":4}';

const produto = JSON.parse(recebido);
produto.preco *= 0.9;
produto.estoque -= 1;
const jsonFinal = JSON.stringify(produto);
console.log(typeof produto);
console.log(jsonFinal);
console.log(typeof jsonFinal);