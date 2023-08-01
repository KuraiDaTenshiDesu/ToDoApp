import createTask from "./createTask.js";
import showTask from "./showTask.js";

export default function getTasksFromStorage() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach(data => {
        let task = createTask(data.name, data.date);

        if (data.status === 'done') {
            task.classList.add('task__done');
        }

        showTask(task);
    })
}