// script.js
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const priorityInput = document.getElementById("priority");
  const taskValue = taskInput.value.trim();
  const priorityValue = priorityInput.value;
  const elTaskTable = document.getElementById("taskTable");
  elTaskTable.style.display = "table";

  if (taskValue === "") {
    alert("Please enter a task.");
    return;
  }

  const tableBody = document.querySelector("#taskTable tbody");

  // Create a new row
  const row = document.createElement("tr");
  row.classList.add("todo-item");

  //create priority cell
  const priorityCell = document.createElement("td");
  priorityCell.textContent = priorityValue;

  // Create the task cell
  const taskCell = document.createElement("td");
  taskCell.textContent = taskValue;

  // Create the actions cell
  const actionsCell = document.createElement("td");

  // Create the mark as completed button
  const completeButton = document.createElement("button");
  completeButton.classList.add("btn-complete");
  completeButton.textContent = "Complete";
  completeButton.onclick = () => {
    taskCell.classList.toggle("completed");
  };

  // Create the delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn-delete");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => {
    row.remove();
    const elsTodoItem = document.getElementsByClassName("todo-item");
    if (elsTodoItem.length == 0) {
      elTaskTable.style.display = "none";
    }
  };

  // Append buttons to the actions cell
  actionsCell.appendChild(completeButton);
  actionsCell.appendChild(deleteButton);

  // Append cells to the row
  row.appendChild(taskCell);
  row.appendChild(priorityCell);
  row.appendChild(actionsCell);

  // Append row to the table body
  tableBody.appendChild(row);

  // Clear the input
  taskInput.value = "";
}
