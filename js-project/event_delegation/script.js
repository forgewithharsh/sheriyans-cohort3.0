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
main.append(box);

let timer = document.querySelector("#timer");

let btn = document.querySelector("button");

let time = 0;

btn.addEventListener("click", () => {
  let randomY = Math.random() * 100;
  let randomX = Math.random() * 100;

  box.style.top = `${randomX}%`;
  box.style.left = `${randomY}%`;

  interval = setInterval(() => {
    time += 1;

    timer.textContent = time
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
});
