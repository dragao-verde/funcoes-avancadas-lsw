/*
Crie a arrow function listarAprovados(lista, mediaMinima = 7),
que retorna um novo array com os nomes, em MAIÚSCULAS,
dos alunos com média maior ou igual a mediaMinima. Encadeie
filter() e map(). Teste sem informar a média mínima (usa o valor
padrão 7) e informando 8.
*/

const alunos = [
  {nome:"ana",media:8.5},
  {nome:"bruno",media:6},
  {nome:"carla",media:7.5},
  {nome:"davi",media:9}
];

const listarAprovados = (lista, mediaMinima = 7) => lista.filter(aluno => aluno.media >= mediaMinima).map(aluno => aluno.nome.toUpperCase());
       
console.log(listarAprovados(alunos));
console.log(listarAprovados(alunos, 8));