let taskForm = document.getElementById('task-form');
let taskInput = document.getElementById('task-input');
let taskListEl = document.getElementById('task-list-el');

let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

if (taskList.length == 0) {
    taskInput.innerHTML = "List is Empty";
}

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (taskInput.value == '') {
        return;
    }

    let task = taskInput.value.trim();
    taskList.unshift(task);
    localStorage.setItem('tasks', JSON.stringify(taskList));

    displayTasks(taskList);

    taskInput.value = '';

})

function displayTasks(tasks) {
    // if (tasks.length == 0) {
    //     return;
    // }
    let eachTask = "";
    tasks.forEach((task, index) => {
        eachTask += `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span class="fw-bold"> ${task}</span>
                    <div>
                        <button class="btn btn-sm btn-outline-primary me-2"  onclick=" updateTask(${index})">
                            <i class="bi bi-pencil"></i> Edit
                        </button>
                        <button class="btn btn-sm btn-outline-danger" onclick=" deleteTask(${index})">
                            <i class="bi bi-trash "></i> Delete
                        </button>
                    </div>
                </li>`;
    });
    taskListEl.innerHTML = eachTask;
}
displayTasks(taskList)


//Delete

function deleteTask(id) {
    taskList.splice(id, 1);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTasks(taskList);
}


//Update

function updateTask(id) {
    taskInput.value = taskList[id];
    taskList.splice(id, 1);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTasks(taskList);
}
