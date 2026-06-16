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

  let mainH = main.clientHeight - box.offsetHeight;
  let mainW = main.clientWeight - box.offsetWidth;

  let randomY = Math.random() * mainH;
  let randomX = Math.random() * mainW;

  box.style.top = `${randomX}px`;
  box.style.left = `${randomY}px`;
};

btn.addEventListener("click", () => {
  randomBox();
  clearInterval(interval);

  interval = setInterval(() => {
    randomBox();
    time += 1;
    timer.textContent = time;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
});
