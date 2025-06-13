// // console.log('Olá mundo 1');
// // console.log('Olá mundo 2');
// // console.log('Olá mundo 3');
// // console.log('Olá mundo 4');

// const nome = 'Vitor'; // string '' "" ``
// const salario = 40000; // number
// console.log(nome);
// console.log(salario);
// console.log(salario + 5000);
// console.log('Meu nome é ' + nome);
// console.log(salario + '3000');
// const price = 12.5 * 100;
// console.log(price);

// const isAdmin = true; // booleanos
// console.log(isAdmin);

// const identidade = {
//   id: 1,
//   nome: 'Vitor',
//   chamar: () => {
//     console.log('Chamando o Vitor');
//   },
// };

// console.log(identidade.chamar());

// const alunos = ['Rafa', 'Serjão', 'Leo'];
// console.log(alunos[1]);

// // function somar(a, b) {
// //   return a + b;
// // }

// const alertarResultado = (resultado) => {
//   console.log(resultado);
// };

// // arrow function () => {}
// const somar = (a, b, alertarResultado) => {
//   alertarResultado(a + b);
//   return a + b;
// };

// // callback
// // console.log(somar(2, 3));

// somar(2, 3, alertarResultado);

// const aluno = {
//   id: 1,
//   nome: 'Vitor',
//   idade: 30,
// };
// aluno.idade = 40;

// console.log({
//   ...aluno,
//   idade: 40,
// });

// const payload = {
//   id: 1,
//   nome: 'Vitor',
//   idade: 40,
//   salario: 40000,
// };

// // spread operator
// const newAluno = {
//   ...aluno,
//   ...payload,
//   estado: 'RJ',
// };

// console.log(newAluno);
/*
const useMath = () => {
  const somar = (a, b) => {
    return a + b;
  };

  const diminuir = (a, b) => {
    return a - b;
  };

  return {
    somar,
    diminuir,
  };
};

const numero1 = 5;
const numero2 = 8;

const { somar, diminuir } = useMath();
// const vasco = useMath()[0];
console.log(somar(numero1, numero2));
console.log(diminuir(numero1, numero2));

// destructuring
const payload = {
  id: 1,
  nome: 'Vitor',
  idade: 40,
  salario: 40000,
};

const { id, nome } = payload;

console.log(`O id do meu usuario é o ${id} e o nome do usuário é ${nome}`);
*/

/*
const variavel1 = []

console.log(variavel1)
*/

let users = [
  {
    id: 1,
    name: 'Vitor',
  },
  {
    id: 2,
    name: 'Leo',
  },
  {
    id: 3,
    name: 'Rafa',
  },
];

console.log(users.map(user => {
  return {
    id: user.id,
    name: user.name.toUpperCase()
  }
}))

console.log(users)