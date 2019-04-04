//REST: Pegar o resto das propriedades. Permite representar um número indefinido de argumentos em um array.

const usuario = {
  nome: "Fulano",
  idade: "20",
  empresa: "SysMap"
};

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);

//Outro Exemplo:

const arr = [1, 2, 3, 4]
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);


//Exemplo com function()
//A function espera qualquer parâmetros com spread, e recebe no momento de chamada 
function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 3, 4));





//SPREAD Operations: permite uma expressão ser expandida em locais onde múltiplos argumentos (por chamadas de função) ou múltiplos elementos (por array literais) são esperados.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {
  nome: "Fulano",
  idade: "22",
  empresa: "SysMap"
};

//A ideia aqui é sobrescrever apenas um elemento (nome) do vetor de usuário1.
const usuario2 = { ...usuario1, nome: "Gabriel" };
console.log(usuario2);