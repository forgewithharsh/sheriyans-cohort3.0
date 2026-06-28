const bird = document.querySelector(".bird-png");
const game = document.querySelector(".game");

let birdTop = 200;
let gravity = 2;

setInterval(() => {
  birdTop += gravity;
  bird.style.top = birdTop + "px"
}, 20)

document.addEventListener('keydown', (e) => {
  if(e.code === "Enter"){
    birdTop = birdTop - 60
  }
})
