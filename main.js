const todo = document.querySelector("#note-list");
const button = document.querySelector("#btnAddNote");

// seed data
const notes = ["note1", "note2", "note3"];

const createNote = note => {
  const li = document.createElement("li");
  const span = document.createElement("span");

  li.textContent = note;
  todo.appendChild(li);
  span.textContent = "    X";
  li.appendChild(span);

  span.addEventListener("click", () => {
    li.style.display = "none";
  });
};

notes.forEach(note => createNote(note));

button.addEventListener("click", () => {
  const input = document.querySelector("input");

  if (input.value !== "") {
    createNote(input.value);
    input.value = "";
  }
});
