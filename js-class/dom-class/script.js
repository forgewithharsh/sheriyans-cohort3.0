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

console.log(res);
