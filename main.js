function getDateString() {
    let date = new Date();

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let hours = date.getHours();
    let minutes = date.getMinutes();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear() % 100;

    if (hours < 10) {
        hours = `0${hours}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    return `${hours}:${minutes} | ${day}.${months[month]}.${year}`;
}

function createTask(name) {
    let date = getDateString();

    let task = document.createElement('div');
    task.classList.add('task');

    let task_title = document.createElement('h2');
    task_title.classList.add('task_title');
    task_title.innerHTML = name;

    let task_date = document.createElement('p');
    task_date.classList.add('task_date');
    task_date.innerHTML = date;

    let task_time = document.createElement('p');
    task_time.classList.add('task_time');
    task_time.innerHTML = '00:00:00 | 2hrs';

    let task_buttons = document.createElement('div');
    task_buttons.classList.add('task_buttons');

    let task_button_start = document.createElement('button');
    task_button_start.classList.add('task_button');
    task_button_start.classList.add('task_button__start');

    let task_button_check = document.createElement('button');
    task_button_check.classList.add('task_button');
    task_button_check.classList.add('task_button__check');

    let task_button_delete = document.createElement('button');
    task_button_delete.classList.add('task_button');
    task_button_delete.classList.add('task_button__delete');

    task_buttons.append(task_button_start, task_button_check, task_button_delete);

    task.append(task_title, task_date, task_time, task_buttons);

    return task;
}

function showTask(task) {
    let tasks = document.querySelector('.tasks');
    tasks.append(task);
}

let add_task_input = document.getElementById('add-task-input');
let add_task_button = document.querySelector('.app_add-task_button');

add_task_input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        let value = add_task_input.value;
        let task = createTask(value);
        showTask(task);
    }
})

add_task_button.addEventListener('click', () => {
    let value = add_task_input.value;
    let task = createTask(value);
    showTask(task);
})