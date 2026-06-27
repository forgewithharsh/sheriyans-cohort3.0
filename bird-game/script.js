const bird = document.querySelector(".bird-png");
const game = document.querySelector(".game");

let birdTop = 200;
let gravity = 2;

setInterval(() => {
  birdTop += gravity;
  bird.style.top = birdTop + "px";
}, 20);

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    birdTop = birdTop - 60;
  }
});

function createPipe() {
  const pipeTop = document.createElement("div");
  const pipeBottom = document.createElement("div");

  pipeTop.className = "pipe";
  pipeBottom.className = "pipe";

  let gap = 100;

  let gameHeight = game.clientHeight;

  let maxHeight = gameHeight - gap - 50;


  let topPipeHeight = Math.random() * maxHeight + 50;
  let bottomPipeHeight = maxHeight - topPipeHeight - gap;

  pipeTop.style.height = topPipeHeight + "px";
  pipeBottom.style.height = bottomPipeHeight + "px"

  pipeTop.style.top = 0
  pipeBottom.style.bottom = 0

  game.append(pipeTop, pipeBottom)

  // let pipeLeft =
}
