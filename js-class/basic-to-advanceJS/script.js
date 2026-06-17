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

let number1 = 40;

let guess = 0;

do {
  guess = parseInt(prompt("Guess a number: "));

  if (guess === number1) {
    alert("Winner");
    break;
  }
} while (guess != 0);
