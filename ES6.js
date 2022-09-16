"use strict";
//const and let
let age = 20; //Can be reassigned
console.log(age);
age = age + 5;
console.log(age);

const name = "John"; //Can not be reassigned
// name = "Jane";

//Arrow functions

//normal func
function add(a, b) {
  console.log(a + b);
}

add(2, 2);

//arrow
const add1 = (a, b) => {
  console.log(a + b);
};

add(2, 3);

//example
const array = [1, 2, 3];
array.map((n) => {
  console.log(n);
});
