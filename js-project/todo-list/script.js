// const inp = document.querySelector("input");
// const btn = document.querySelector("#add");
// const todoBox = document.querySelector(".todo-list");

// btn.addEventListener("click", () => {
//   let value = inp.value;

//   if (value.trim() === "") return;

//todoBox.innerHTML += ` <div class="li">
//           <h3>${value}</h3>
//           <div>
//             <button class="btn edit">Edit</button>
//             <button class="btn del">Delete</button>
//           </div>
//         </div>`;

//   let edit = document.querySelector(".edit");
//   edit.addEventListener("click", () => {
//     const newText = prompt("Edit Todo: " + inp.value);

//     value = edit;
//   });

//   let del = document.querySelector(".del");
//   let li = document.querySelector(".li");

//   del.addEventListener("click", () => {
//     li.remove();
//   });

//   inp.value = "";
// });

const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const users = document.querySelector(".users");
const url = document.querySelector("#url");

let usersData = [
  {
    id: 1,
    name: "Raja Babu",
    email: "raj@gmail.com",
    dob: "1998-05-12",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@gmail.com",
    dob: "2000-08-24",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit@gmail.com",
    dob: "1997-11-15",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    id: 4,
    name: "Neha Singh",
    email: "neha@gmail.com",
    dob: "2001-03-09",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    id: 5,
    name: "Rohit Verma",
    email: "rohit@gmail.com",
    dob: "1999-07-30",
    photo: "https://images.unsplash.com/photo-1504593811423-6dd665756598",
  },
  {
    id: 6,
    name: "Anjali Gupta",
    email: "anjali@gmail.com",
    dob: "2002-01-18",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
];

const ui = () => {
  users.innerHTML = "";
  usersData.forEach((elem, index) => {
    users.innerHTML += `<div class="users-card">
        <div class="img-box">
          <img
            src="${elem.photo}"
            alt="image here"
          />
        </div>
        <div class="text">
          <h3>Name - ${elem.name}</h3>
          <p>Email - ${elem.email}</p>
        </div>
        <div class="actions">
        <button id="edit">Edit</button>
        <button  onClick=(deleteCard(${index})) id="delete">Delete</button>
        </div>

      </div>`;
  });
};

ui();

form.addEventListener("submit", (events) => {
  events.preventDefault();
  // console.log(events);

  let name = inp1.value;
  let email = inp2.value;
  let photo = url.value;

  if (name.trim() === "" && email.trim() === "" && Image.trim() === "") return;

  usersData.push({
    name,
    email,
    photo,
  });

  ui();

  form.reset();
});

let deleteCard = (idx) => {
  usersData.splice(idx, 1);
  ui();
};
