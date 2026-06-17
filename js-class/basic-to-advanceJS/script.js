// console.log("This is a hello from external js file!");

var age = 22;

// console.log(age);

age = "harsh";

// console.log(age);

if (true) {
  var age = 23;
}

// console.log(age);

// Numbers
let num = 3.14;
let num2 = 10;

// String
let firstName = "123#4harsh";
const lastName = "Garg";

// Boolean
let isLoggedIn = true;

// console.log(isLoggedIn);

// Null
let lastLoginDate = null;

//Undefined
let x;

// Objects
const person = {
  firstName: "harsh",
  lastName: "guleria",
  age: 19,
  isLoggedIn: true,
};

// console.log(person.age);

// If - else
const age1 = 90;

if (age1 >= 80) {
  console.log("yes, you are an adult");
} else if (age1 >= 18) {
  console.log("yes, you can vote");
} else {
  console.log("no, you can't vote");
}

// Ternary Operator

let result = age1 >= 18 ? "Yes" : "No";

// console.log(result);

// Switch Case
const option = 3;
switch (option) {
  case 1:
    console.log("Namaste");
    break;

  case 2:
    console.log("Hello");
    break;
  default:
    console.log("Bonjor!");
}

let a = 30;
let opt = "+";
let b = 40;

switch (opt) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("IDK");
}

// Logical Operators
// AND, OR, NOT

const age2 = 2;
const gender = "male";

if (age >= 18 && gender == "male") {
  // console.log("You are adult male");
}

if (age2 >= 18 || gender == "male") {
  // console.log("You are adult male");
}

const number = 5;

if (number % 2 != 0) {
  console.log("Odd");
}

// Loops
// for (let i = 1; i <= 10; i += 1) {
// console.log("Harsh", i);
// }

// let ip = 50;
// let house = 50;
// while (ip != house) {
//   ip += 1;
//   console.log("Step Taken", ip);
// }

// do {
//   ip += 1;
//   console.log("Step Taken", ip);
// } while (ip <= house);

// guess the input

// let number1 = 40;

// let guess = 0;

// do {
//   guess = parseInt(prompt("Guess a number: "));

//   if (guess === number1) {
//     alert("Winner");
//     break;
//   }
// } while (guess != 0);

// Function

function sayHello() {
  console.log("Hey Harsh");
}

// sayHello(); // calling the function

function add(a, b) {
  return a + b;
}

// console.log(add(2, 5));

// let arr = [2, 5, 4, 2];

// function sumOfAll(...numbers) {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// function sumOfAll() {
//   let ans = 0;
//   for (let i = 0; i < arguments.length; i = i + 1) {
//     ans = ans + arguments[i];
//   }
//   return ans;
// }

function sumOfAll(...numbers) {
  // spread operator
  let ans = 0;
  for (let i = 0; i < numbers.length; i++) {
    ans += numbers[i];
  }
  return ans;
}

// console.log(sumOfAll(2, 4, 5, 2));

const add2 = (a, b) => {
  return a + b;
};

const addV2 = (a, b) => a + b; // One-linear

// console.log(add2(23, 3));

// Hoisting
sayHellov2();

function sayHellov2() {
  console.log("Hey there");
}

// This keyword
const obj2 = {
  value: 20,
  myFunction: function () {
    console.log("Value is: " + this.value);
  },
};

obj2.myFunction();
