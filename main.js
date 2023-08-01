import createTask from './modules/createTask.js';
import getDateString from './modules/getDateString.js';
import getTasksFromStorage from './modules/getTasksFromStorage.js';
import isNameFree from './modules/isNameFree.js';
import showTask from './modules/showTask.js';

if (!localStorage.getItem('tasks')) {
    localStorage.setItem('tasks', JSON.stringify([]));
}

getTasksFromStorage();

let add_task_input = document.getElementById('add-task-input');
let add_task_button = document.querySelector('.app_add-task_button');

add_task_input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        let value = add_task_input.value.trim();
        let date = getDateString();

        if (isNameFree(value)) {
            let task = createTask(value, date);
            add_task_input.value = '';
            showTask(task);
        } else {
            alert('Task Name Should Be Unique')
        }
    }
})

add_task_button.addEventListener('click', () => {
    let value = add_task_input.value.trim();
    let date = getDateString();

    if (isNameFree(value)) {
        let task = createTask(value, date);
        add_task_input.value = '';
        showTask(task);
    } else {
        alert('Task Name Should Be Unique')
    }
})