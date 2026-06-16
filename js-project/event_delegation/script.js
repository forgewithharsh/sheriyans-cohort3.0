// const five = document.querySelector("#five");
// const main = document.querySelector("main");

// five.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// main.addEventListener("click", (e) => {
//   console.log(e.target);
// });

let main = document.querySelector("main");

let box = document.createElement("div");
box.classList.add("box");

let timer = document.querySelector("#timer");

let btn = document.querySelector("button");

let time = 0;
let interval;

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

const randomBox = () => {
  box.style.backgroundColor = randomColor();

  main.append(box);

  time += 1;
  timer.textContent = time;

  let randomY = Math.random() * 100;
  let randomX = Math.random() * 100;

  box.style.top = `${randomX}%`;
  box.style.left = `${randomY}%`;
};

btn.addEventListener("click", () => {
  randomBox();
  clearInterval(interval);

  interval = setInterval(() => {
    randomBox();
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
});
