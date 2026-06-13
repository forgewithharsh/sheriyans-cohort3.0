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

form.addEventListener("submit", (events) => {
  events.preventDefault();
  console.log(events);

  let name = inp1.value;
  let email = inp2.value;

  if (name.trim() === "" && email.trim() === "") return;
  
  users.innerHTML += `<div class="users-card">
        <div class="img-box">
          <img
            src="https://images.unsplash.com/photo-1779406859387-5d6fd116b3ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt="image here"
          />
        </div>
        <div class="text">
          <h3>Name - ${name}</h3>
          <p>Email - ${email}</p>
        </div>
      </div>`;

  form.reset();
});
