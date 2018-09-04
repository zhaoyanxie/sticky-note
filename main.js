const todo = document.querySelector("#note-list");
const btnAddNote = document.querySelector("#btnAddNote");
const btnSearchNote = document.querySelector("#btnSearchNote");
const list = document.querySelector("ul");
const editList = document.querySelector(".edit-list");

// seed data
const notes = ["note1", "note2", "note3"];

const createNote = note => {
  const li = document.createElement("li");
  const span = document.createElement("span");

  li.textContent = note;
  todo.appendChild(li);
  span.textContent = "X";
  li.appendChild(span);
  span.addEventListener("click", () => {
    li.style.display = "none";
  });
};

notes.forEach(note => createNote(note));

btnAddNote.addEventListener("click", () => {
  const input = document.querySelector("input");

  if (input.value !== "") {
    notes.push(input.value);
    createNote(input.value);
    input.value = "";
  }
  console.log(notes);
});

btnSearchNote.addEventListener("click", () => {
  const searchInput = document.querySelector("#searchNote").value + "X";
  const li = document.querySelectorAll("li");
  li.forEach(li => {
    console.log(li.textContent, searchInput);
    if (li.textContent !== searchInput) li.classList.toggle("hide");
  });
});

editList.onclick = () => {
  list.contentEditable = true;
};
