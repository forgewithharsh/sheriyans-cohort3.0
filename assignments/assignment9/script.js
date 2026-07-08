const dateDisplay = document.getElementById("dateDisplay");
const timeDisplay = document.getElementById("timeDisplay");

function updateClock() {
  const now = new Date();

  dateDisplay.textContent = now.toDateString();
  timeDisplay.textContent = now.toLocaleTimeString();
}

updateClock();

setInterval(updateClock, 1000);

const weatherContent = document.getElementById("weatherContent");

getWeather("Delhi");

async function getWeather(cityName) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=73e82a815be433495f38f0fa9dde83fb&units=metric`,
  );

  const data = await res.json();

  weatherContent.innerHTML = `
    <h3>${data.name}, ${data.sys.country}</h3>

    <h1>${Math.round(data.main.temp)}°C</h1>

    <p>${data.weather[0].description}</p>

    <small>
        Feels like ${Math.round(data.main.feels_like)}°C •
        Humidity ${data.main.humidity}% •
        Wind ${data.wind.speed} m/s
    </small>
`;
}

function error() {
  weatherContent.textContent = "Location not available";
}

const dashboardView = document.getElementById("dashboardView");

const cards = document.querySelectorAll(".feature-card");

const featureViews = document.querySelectorAll(".feature-view");

cards.forEach((card) =>
  card.addEventListener("click", () => {
    const target = card.dataset.target;

    dashboardView.style.display = "none";

    featureViews.forEach((view) => (view.style.display = "none"));

    document.getElementById(target).style.display = "block";
  }),
);

const backBtns = document.querySelectorAll("[data-back]");
backBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    featureViews.forEach((view) => {
      view.style.display = "none";
    });

    dashboardView.style.display = "block";
  });
});

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = todoInput.value.trim();

  if (task === "") return;

  const li = document.createElement("li");
  li.className = "item-row";

  li.innerHTML = `
    <span class="item-text">${task}</span>

    <button class="complete-btn">
      <i class="ri-check-line"></i>
    </button>

    <button class="delete-btn">
      <i class="ri-delete-bin-line"></i>
    </button>
  `;

  todoList.appendChild(li);

  const completeBtn = li.querySelector(".complete-btn");
  const deleteBtn = li.querySelector(".delete-btn");

  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  todoInput.value = "";
});

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");

async function getQuote() {
  const res = await fetch("https://dummyjson.com/quotes/random");

  const data = await res.json();

  quoteText.textContent = `"${data.quote}"`;
  quoteAuthor.textContent = `- ${data.author}`;
}

getQuote();

newQuoteBtn.addEventListener("click", getQuote);

const timerDisplay = document.getElementById("timerDisplay");
const sessionLabel = document.getElementById("sessionLabel");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let time = 25 * 60;
let timer = null;

function updateTime() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  timerDisplay.textContent = `${minutes} : ${seconds}`;
}

updateTime();

startBtn.addEventListener("click", () => {
  if (timer) return;

  timer = setInterval(() => {
    if (time > 0) {
      time--;
      updateTime();
    } else {
      clearInterval(timer);
      timer = null;
      alert("Time's up!");
    }
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;

  time = 25 * 60;
  updateTime();
});
