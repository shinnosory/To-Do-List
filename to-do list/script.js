const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTask");
const list = document.getElementById("taskList");
const counter = document.getElementById("counter");

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateCounter();
  });

  const actions = document.createElement("div");
  actions.className = "actions";

  const del = document.createElement("span");
  del.textContent = "✖";
  del.className = "delete";
  del.onclick = (e) => {
    e.stopPropagation();
    li.remove();
    updateCounter();
  };

  actions.appendChild(del);
  li.appendChild(actions);
  list.appendChild(li);

  input.value = "";
  updateCounter();
}

function updateCounter() {
  const total = list.children.length;
  counter.textContent = `${total} tarefa${total !== 1 ? "s" : ""}`;
}
