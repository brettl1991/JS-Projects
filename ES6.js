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

add1(2, 3);

//example
const array = [1, 2, 3];
array.map((n) => {
  // console.log(n);
});

//template string
const greeting = (name) => {
  // const string = "Hello, " + name + "!";
  const templateString = `Hello, ${name}!`;
  console.log(templateString);
};

greeting("Agnes");

//Default parameters

const add2 = (a, b = 0) => {
  //b =0 if user not assign to it any value
  console.log(a + b);
};

add2(1);

//array destructuring
const arr = [1, 2, 3];
// const first = arr[0];
// const third = arr[2];

const [first, , third] = arr;

console.log(first, third);

//object destructuring
const object = {
  channelName: "JavaScript Mastery",
  views: 1500,
};
// console.log(chanelName); //we can not do this as this is in an obj

// const chanelName = object.channelName;
// const views = object.views;

// console.log(chanelName, views);
//with destructuring
const { channelName, views } = object;
// console.log(channelName, views);

//Rest operator
const add3 = (...numbers) => console.log(numbers.reduce((a, b) => a + b, 0));
add3(1, 2, 3); //6
