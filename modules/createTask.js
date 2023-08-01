import isNameFree from "./isNameFree.js";

export default function createTask(name, date) {
    let task = document.createElement('div');
    task.classList.add('task');

    let task_title = document.createElement('h2');
    task_title.classList.add('task_title');
    task_title.innerHTML = name;

    let task_date = document.createElement('p');
    task_date.classList.add('task_date');
    task_date.innerHTML = date;

    let task_buttons = document.createElement('div');
    task_buttons.classList.add('task_buttons');

    let task_button_check = document.createElement('button');
    task_button_check.classList.add('task_button');
    task_button_check.classList.add('task_button__check');

    let task_button_delete = document.createElement('button');
    task_button_delete.classList.add('task_button');
    task_button_delete.classList.add('task_button__delete');

    task_buttons.append(task_button_check, task_button_delete);

    task.append(task_title, task_date, task_buttons);

    task.addEventListener('click', (event) => {
        if (event.target.classList.contains('task_button__check')) {
            task.classList.toggle('task__done');

            let tasks = JSON.parse(localStorage.getItem('tasks'));
            let task_names = tasks.map(task => task.name);
            let index = task_names.indexOf(name);

            if (tasks[index].status === 'available') {
                tasks[index].status = 'done';
            } else {
                tasks[index].status = 'available';
            }
            
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        if (event.target.classList.contains('task_button__delete')) {
            let tasks = document.querySelector('.tasks');
            tasks.removeChild(task);

            let tasks_storaged = JSON.parse(localStorage.getItem('tasks'));
            let task_names = tasks_storaged.map(task => task.name);
            let index = task_names.indexOf(name);

            tasks_storaged.splice(index, 1);
            
            localStorage.setItem('tasks', JSON.stringify(tasks_storaged));
        }
    })

    let task_info = {
        name,
        date,
        status: 'available'
    };

    let tasks = JSON.parse(localStorage.getItem('tasks'));

    if (isNameFree(task_info.name)) {
        tasks.push(task_info);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    return task;
}