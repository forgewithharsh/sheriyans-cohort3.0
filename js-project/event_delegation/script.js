// const five = document.querySelector("#five");
// const main = document.querySelector("main");

// five.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// main.addEventListener("click", (e) => {
//   console.log(e.target);
// });

const main = document.querySelector("main");

const timer = document.querySelector("#timer");
const scoreee = document.querySelector("#score");

const btn = document.querySelector("button");

const overlay = document.querySelector("#overlay");

let box = document.createElement("div");
box.classList.add("box");

let time = 0;
let interval;
let timeout;
let score = 0;
let overlayTimeout;

let boxClicked = false;

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

const randomBox = () => {
  boxClicked = false;

  box.style.backgroundColor = randomColor();
  main.append(box);

  let mainH = main.clientHeight - box.offsetHeight;
  let mainW = main.clientWidth - box.offsetWidth;

  const randomY = Math.random() * mainH;
  const randomX = Math.random() * mainW;

  box.style.top = `${randomY}px`;
  box.style.left = `${randomX}px`;
};

btn.addEventListener("click", () => {
  clearInterval(interval);
  clearTimeout(timeout);
  clearTimeout(overlayTimeout);
  overlay.style.display = "none";

  time = 0;
  score = 0;
  timer.textContent = 0;
  scoreee.textContent = 0;

  randomBox();
  interval = setInterval(() => {
    randomBox();

    time += 1;
    timer.textContent = time;
  }, 1000);

  timeout = setTimeout(() => {
    clearInterval(interval);
    box.remove();

    overlay.style.display = "flex";

    overlayTimeout = setTimeout(() => {
      overlay.style.display = "none";
    }, 3000);
  }, 10000);
});

box.addEventListener("click", () => {
  if (boxClicked) return;

  score += 1;
  scoreee.textContent = score;

  boxClicked = true;
});
