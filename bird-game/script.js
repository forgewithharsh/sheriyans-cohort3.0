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

  pipeTop.className = "pipe";
  pipeBottom.className = "pipe";

  let maxheight = game.clientHeight;

  let gap = 150;

  let topPipeHeight = Math.random() * maxheight + 50;

  // let BottomPipeHeight =
}
