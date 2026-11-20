let tasks = [];
let editIndex = -1;

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    if (editIndex === -1) {
        tasks.push(task);
    } else {
        tasks[editIndex] = task;
        editIndex = -1;
        document.getElementById("addBtn").textContent = "Add";
    }

    input.value = "";
    displayTasks();
}

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(function(task, index) {
        let li = document.createElement("li");

        let span = document.createElement("span");
        span.className = "task-text";
        span.textContent = task;

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";

        editBtn.onclick = function() {
            document.getElementById("taskInput").value = tasks[index];
            editIndex = index;
            document.getElementById("addBtn").textContent = "Update";
            document.getElementById("taskInput").focus();
        };

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.onclick = function() {
            tasks.splice(index, 1);

            if (editIndex === index) {
                editIndex = -1;
                document.getElementById("taskInput").value = "";
                document.getElementById("addBtn").textContent = "Add";
            } else if (editIndex > index) {
                editIndex--;
            }

            displayTasks();
        };

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}
document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});