// Q1.
// const h1 = document.querySelector("#title").textContent="Welcome to JS"

// console.log(h1);

// Q2.
// const btn = document.querySelector('#btn')

// btn.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'lightblue'
// })

// Q3.
// const input = document.querySelector("#username");
// const btn = document.querySelector("button");
// const p = document.querySelector("#output");

// btn.addEventListener("click", () => {
//   const value = input.value;

//   p.textContent = value;
// });

// Q4.
// const btn = document.querySelector("button");
// const p = document.querySelector("#message");

// btn.addEventListener("click", () => {
//   if (p.style.display === "block") {
//     p.style.display = "none";
//   } else {
//     p.style.display = "block";
//   }
// });

// Q5.
// const list = document.getElementById("list");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   const li = document.createElement("li");

//   li.textContent = "Banana";

//   list.appendChild(li);
// });

// Q6.
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   btn.parentElement.remove();
// });

// Q7.
// const textArea = document.querySelector("textarea");
// const character = document.querySelector(".char");

// textArea.addEventListener("input", () => {
//   let count = textArea.value.length;
//   character.textContent = `Characters: ${count}`;
// });

// Q8.
// const input = document.querySelector("input");
// const list = document.querySelector("ul");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   let value = input.value;

//   const li = document.createElement('li');
//   li.textContent = value;

//   list.appendChild(li);

//   input.value = "";
// });

// Q9.
// const images = [
//   "https://picsum.photos/id/237/400/400",
//   "https://picsum.photos/id/238/400/400",
//   "https://picsum.photos/id/239/400/400",
//   "https://picsum.photos/id/240/400/400",
//   "https://picsum.photos/id/241/400/400",
// ];

// const img = document.getElementById("image");
// const btn = document.querySelector("button");

// let index = 0;
// img.src = images[index];

// btn.addEventListener("click", () => {
//   index++;
//   if (index >= images.length) {
//     index = 0;
//   }
//   img.src = images[index];
// });

// Q10.
const nameInput = document.getElementById("name");
const courseInput = document.getElementById("course");
const studentDiv = document.getElementById("students");
const addBtn = document.getElementById("addBtn");

let students = [];

addBtn.addEventListener("click", () => {
  let name = nameInput.value.trim();
  let course = courseInput.value.trim();

  if (name === "" || course === "") return;

  students.push({
    name,
    course,
  });

  renderStudents()

  nameInput.value = ""
  courseInput.value = ""
});

function renderStudents() {
  studentDiv.innerHTML = ""

  students.forEach((student, index) => {
    const card = document.createElement('div');
    card.classList.add('card')

    const h1 = document.createElement('h1')
    h1.textContent = `${student.name}`

    const p = document.createElement('p')
    p.textContent = `${student.course}`

    const delBtn = document.createElement('button')
    delBtn.textContent = 'Delete'


    card.appendChild(h1)
    card.appendChild(p)
    card.appendChild(delBtn)

    studentDiv.append(card)

    delBtn.addEventListener('click', () => {
      students.splice(index, 1)
      renderStudents()
    })

  })
}
