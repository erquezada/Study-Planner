let taskList = document.getElementById("taskList");

function addTask() {
  let task = document.getElementById("task").value;
  let date = document.getElementById("date").value;
  if (task && date) {
    let li = document.createElement("li");
    li.innerHTML = "<span>" + task + "</span> - " + date + "<button onclick='removeTask(this)'>Delete</button>";
    taskList.appendChild(li);
    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
  } else {
    alert("Please enter task and date");
  }
}

function removeTask(item) {
  taskList.removeChild(item.parentNode);
}
