// const bulb = document.querySelector(".bulb");
// const btn = document.querySelector("button");

// let flag = true;

// btn.addEventListener("click", () => {
//   let lightBulb = bulb.classList.toggle("lightUp");

//   if (lightBulb) {
//     btn.textContent = "Off";
//   } else {
//     btn.textContent = "On";
//   }
// });

const h3 = document.querySelector("#id1");

let res = h3.getAttribute("class");
// h3.setAttribute("width", "200");

h3.removeAttribute("class");

console.log(h3.hasAttribute("id"));

// console.log(res);

const userCard = document.querySelector("#user-card");

userCard.dataset.userId = "678";

console.log(userCard.getAttribute("data-user-id"));

const inp = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log(inp.value);
  console.log(inp.getAttribute("value"));
});

const main = document.querySelector("main");

let footer = document.createElement("footer");
const span = document.createElement("span")

span.innerHTML = "hey i am <i>dynamic...</i>"

main.append(footer, span);
