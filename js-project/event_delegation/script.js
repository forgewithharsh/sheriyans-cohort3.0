// const five = document.querySelector("#five");
// const main = document.querySelector("main");

// five.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// main.addEventListener("click", (e) => {
//   console.log(e.target);
// });

const main = document.querySelector("main");

const box = document.createElement("div");
box.classList.add("box");

const btn = document.querySelector("button");

const timer = document.querySelector("#timer");

const overlay = document.querySelector("#overlay");

let time = 0;
let interval;

const randomBox = () => {
  box.style.backgroundColor = randomColor();
  main.append(box);

  let mainH = main.clientHeight - box.offsetHeight;
  let mainW = main.clientWidth - box.offsetWidth;

  const randomY = Math.random() * mainH;
  const randomX = Math.random() * mainW;

  box.style.top = `${randomY}px`;
  box.style.left = `${randomX}px`;
};

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
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
    overlay.style.display = "flex";
  }, 10000);
});
