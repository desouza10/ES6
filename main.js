const arr = [1, 2, 3, 4, 5];

//forma comum
const comum = arr.map(function(item) {
  return item * 2;
});
console.log(semFunction);

//Com arrow functions, funcções anonimas, podemos retirar o "function" e passar "=>" depois do parâmetro
const semFunction = arr.map(item => {
  return item * 2;
});
console.log(semFunction);

//ou sem parenteses ao informar o parametro
const sempParenteses = arr.map(item => {
  return item * 2;
});
console.log(sempParenteses);

//ou sem o return, dentro da função... Passando direto nesta sintaxe
//param    funcion    return
const semReturn = arr.map(item => item * 2);
console.log(semReturn);
