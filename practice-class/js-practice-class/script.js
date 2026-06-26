// Q1.
// const h1 = document.querySelector("#title").textContent="Welcome to JS"

// console.log(h1);

// Q2.
// const btn = document.querySelector('#btn')

// btn.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'lightblue'
// })

// Q3.
const input = document.querySelector("#username");
const btn = document.querySelector("button");
const p = document.querySelector("#output");

btn.addEventListener("click", () => {
  const value = input.value;

  p.textContent = value;
});
