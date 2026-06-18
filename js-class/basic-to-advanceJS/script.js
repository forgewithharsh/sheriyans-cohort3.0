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

// obj2.myFunction();

// High Order Functions and Callback
function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

// add(2, 4, (val) => console.log(val));
// add(400, 10, (val) => console.log(val));

// Arrays
const students = ["Harsh", "Harry", "John"];
// console.log(students);
// console.log(students[0]);

// students[0] = "harsh guleria";
// students.push({ appleIntelligence: "Siri" });
students.reverse();

// console.log(students);

// Arrays High Order Functions

students.forEach((val) => console.log(val));
let stud = students.map((val) => {
  return val;
});
// console.log(stud);

let ans = students.findIndex((name) => name === "Harry");
// console.log(ans);

let filter = students.filter((fil) => fil.length > 4);
// console.log(filter);

let numbers2 = [1, 2, 3, 4, 5, 6];

let number1 = numbers2.slice(1, 4);
// console.log(number1);

let newArr1 = numbers2.splice(1, 4);

// console.log(newArr1);
// console.log(numbers2);

// DOM
// const value = prompt("What's your name?", "harsh")
// console.log(value);

// document.title = "DOM";
// document.write("This is hacked...");

// const name = prompt("What's your name?")
// document.write("Hello, " + name)

const body = document.querySelector("body");
// body.innerHTML = "<h1>Hacked!</h1>"

const username = document.querySelector("#username");
username.textContent = "It'z Harry!";
username.classList.add("red-color", "underline");

// username.classList.remove("red-color");
username.setAttribute("aria", "123");

const ele = document.querySelector(".paragraph");
// console.log(ele.innerHTML);

const ele2 = document.querySelector("div");
// console.log(ele2.parentElement.children);

const block = document.querySelectorAll(".block");
block.forEach((e) => {
  // console.log(e.innerHTML);
});

const elements = document.getElementsByClassName("block");
const remove = document.getElementsByClassName("remove");

for (let i = 0; i < elements.length; i++) {
  // elements.item(i).style.backgroundColor = "royalblue";
  console.log(elements.item(i));
}

// remove.item(0).remove()

// function handleButtonClick() {
// console.log("That Button is clicked")
// alert("Hey i am clicked")
// }

const el = document.querySelector("button");
const nameBlock = document.querySelector("#name-block");

// el.onclick = () => {
//   console.log('hacked')
// }

// el.addEventListener("click", () => {
//   console.log("I am clicked");

// body.style.backgroundColor = "#121212";
// body.style.color = "#fff";

// body.classList.toggle("dark")
//   if (body.classList.contains("dark")) {
//     body.classList.remove("dark");
//   } else {
//     body.classList.add("dark");
//   }

//   nameBlock.textContent = "Hello, Harsh Guleria!";

//   nameBlock.classList.add("red-color");
// });

// const allChildren = document.querySelector("body").children;

// for (let i = 0; i < allChildren.length; i++) {
//   allChildren.item(i).addEventListener("click", () => {
//     allChildren.item(i).remove();
//   });
// }

const button = document.querySelector("#clickButton");
const container = document.querySelector(".my-container");

let count = 1;

button.addEventListener("click", () => {
  const el = document.createElement("li");
  el.innerText = count;
  container.appendChild(el);
  count++;
});
