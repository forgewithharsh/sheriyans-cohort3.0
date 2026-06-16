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
let scoreee = document.querySelector("#score");

let btn = document.querySelector("button");

let overlay = document.querySelector("#overlay");

let time = 0;
let interval;
let score = 0;

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
  let mainW = main.clientWidth - box.offsetWidth;

  const randomY = Math.random() * mainH;
  const randomX = Math.random() * mainW;

  box.style.top = `${randomY}px`;
  box.style.left = `${randomX}px`;
};

btn.addEventListener("click", () => {
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

box.addEventListener("click", () => {
  score += 1;

  scoreee.textContent = score;
});
