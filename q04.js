/*
Para o array alunos, use: find() para exibir o nome do primeiro
aluno com média menor que 7; some() para verificar se algum
aluno tem média maior ou igual a 9; e every() para verificar se
todos têm média maior ou igual a 7.
*/

const alunos = [
{nome:"Ana",media:8.5},
{nome:"Bruno",media:6},
{nome:"Carla",media:9},
{nome:"Davi",media:5.5}
];

const primeiroAlunoReprovado = alunos.find(aluno => aluno.media < 7);
console.log(primeiroAlunoReprovado.nome);

const algumAlunoAprovado = alunos.some(aluno => aluno.media >= 9);
console.log(algumAlunoAprovado);

const todosAlunosAprovados = alunos.every(aluno => aluno.media >= 7);
console.log(todosAlunosAprovados);