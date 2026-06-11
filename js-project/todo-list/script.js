const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");

btn.addEventListener("click", () => {
  let value = inp.value;

  if (value.trim() === "") return;

  todoBox.innerHTML += ` <div class="li">
          <h3>${value}</h3>
          <div>
            <button class="btn edit">Edit</button>
            <button class="btn del">Delete</button>
          </div>
        </div>`;

  let edit = document.querySelector(".edit");
  edit.addEventListener("click", () => {
    const newText = prompt("Edit Todo: " + inp.value);

    value = edit;
  });

  let del = document.querySelector(".del");
  let li = document.querySelector(".li");

  del.addEventListener("click", () => {
    li.remove();
  });

  inp.value = "";
});
