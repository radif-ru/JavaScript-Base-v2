'use strict';

// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);

var a = 2;
var x = 1 + (a *= 2);
console.log(x);

// x равняется 5, так как к 1 прибавляется пример где а присваивается значение а * 2, то есть 1 + (а = 2 * 2) = 5
