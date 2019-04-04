"use strict";

var arr = [1, 2, 3, 4, 5]; //forma comum

var comum = arr.map(function (item) {
  return item * 2;
});
console.log(semFunction); //Com arrow functions, funcções anonimas, podemos retirar o "function" e passar "=>" depois do parâmetro

var semFunction = arr.map(function (item) {
  return item * 2;
});
console.log(semFunction); //ou sem parenteses ao informar o parametro

var sempParenteses = arr.map(function (item) {
  return item * 2;
});
console.log(sempParenteses); //ou sem o return, dentro da função... Passando direto nesta sintaxe
//param    funcion    return

var semReturn = arr.map(function (item) {
  return item * 2;
});
console.log(semReturn);
