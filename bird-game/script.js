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
    birdTop = birdTop - 80;
  }
});

function createPipe() {
  const pipeTop = document.createElement("div");
  const pipeBottom = document.createElement("div");

  pipeTop.className = "pipe top";
  pipeBottom.className = "pipe bottom";

  let gap = 100;

  let gameHeight = game.clientHeight;

  let maxheight = gameHeight - gap - 70;

  let topPipeHeight = Math.random() * maxheight + 50;
  let bottomPipeHeight = maxheight - topPipeHeight - gap;

  pipeTop.style.height = topPipeHeight + "px";
  pipeBottom.style.height = bottomPipeHeight + "px";

  pipeTop.style.top = 0;
  pipeBottom.style.bottom = 0;

  game.append(pipeTop, pipeBottom);

  let pipeLeft = game.clientWidth;

  pipeTop.style.left = pipeLeft + "px";
  pipeBottom.style.left = pipeLeft + "px";

  let move = setInterval(() => {
    pipeLeft -= 2;

    pipeTop.style.left = pipeLeft + "px";
    pipeBottom.style.left = pipeLeft + "px";

    if (pipeLeft.left > -70) {
      pipeTop.remove;
      pipeBottom.remove;
      clearInterval(move);
    }
  }, 20);
}

setInterval(createPipe, 2000);
