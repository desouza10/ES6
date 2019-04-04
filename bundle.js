"use strict";

var arr = [2, 4, 6, 8, 10]; //array.map -> Lê o todo array

var newArr = arr.map(function (item) {
  return item;
});
console.log(newArr); //arr.reduce -> usado para encontrar um valor cumulativo ou concatenado com base em elementos de todo o array.

var sum = arr.reduce(function (total, index) {
  return total + index;
});
console.log(sum); //é preciso remover elementos indesejados com base em alguma(s) condição(ões).

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

var find = arr.find(function (item) {
  item === 4;
});
console.log(find);
