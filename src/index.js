const appNode = document.getElementById('app');

const addTask = (event) => {
    const form = document.querySelector('.todo-form');
    const newTask = document.createElement('input')
    newTask.type = 'checkbox';
    newTask.value = 'task';
    const taskText = document.createTextNode(document.querySelector('.todo-input').value);
    const taskLabel = document.createElement('label');
    const deleteTaskButton = document.createElement('button');
    deleteTaskButton.className = 'delete-button';
    const taskWrapper = document.createElement('div');
    taskWrapper.className = 'task-wrapper';
    taskLabel.htmlFor = 'task';
    taskLabel.appendChild(taskText);
    if (taskText.textContent != '') {
        taskWrapper.append(newTask, taskLabel, deleteTaskButton);
        tasksContainer.appendChild(taskWrapper);
    } else {
        const alertMessage = document.createElement('p');
        alertMessage.textContent = 'Please, write a task before adding to the list';
        alertMessage.style.color = '#e32020';
        alertMessage.style.marginTop = '10px';
        alertMessage.style.fontWeight = '700';
        form.appendChild(alertMessage);
        setTimeout(() => {
            form.removeChild(alertMessage);
        }, 2000)
    }
}

const deleteTask = (event) => {
    const target = event.target;
    const task = document.querySelector('.task-wrapper');
    console.log(target);
    if (target.className === 'delete-button') {
        tasksContainer.removeChild(task);
    }
}

const createForm = () => {
    const form = document.createElement('form');
    form.className = 'todo-form';
    const taskLabel = document.createElement('label');
    taskLabel.textContent = 'ADD A TASK';
    taskLabel.className = 'todo-label';
    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.className = 'todo-input';
    taskInput.placeholder = 'Write your task';
    const addButton = document.createElement('input');
    addButton.type = 'button';
    addButton.value = 'Add'
    addButton.className = 'todo-button';
    addButton.addEventListener('click', addTask)
    form.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask();
        }
    })
    form.append(taskLabel, taskInput, addButton);
    appNode.appendChild(form);
}

createForm();

const tasksContainer = document.createElement('div');
tasksContainer.className = 'tasks-container';
tasksContainer.addEventListener('click', deleteTask);
appNode.appendChild(tasksContainer);








