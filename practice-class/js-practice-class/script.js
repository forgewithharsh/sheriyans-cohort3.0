// Q1.
// const h1 = document.querySelector("#title").textContent="Welcome to JS"

// console.log(h1);

// Q2.
// const btn = document.querySelector('#btn')

// btn.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'lightblue'
// })

// Q3.
// const input = document.querySelector("#username");
// const btn = document.querySelector("button");
// const p = document.querySelector("#output");

// btn.addEventListener("click", () => {
//   const value = input.value;

//   p.textContent = value;
// });

// Q4.
// const btn = document.querySelector("button");
// const p = document.querySelector("#message");

// btn.addEventListener("click", () => {
//   if (p.style.display === "block") {
//     p.style.display = "none";
//   } else {
//     p.style.display = "block";
//   }
// });

// Q5.
// const list = document.getElementById("list");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   const li = document.createElement("li");

//   li.textContent = "Banana";

//   list.appendChild(li);
// });

// Q6.
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   btn.parentElement.remove();
// });

// Q7.
const textArea = document.querySelector("textarea");
const character = document.querySelector(".char");

textArea.addEventListener("input", () => {
  let count = textArea.value.length;
  character.textContent = `Characters: ${count}`;
});
