export default function isNameFree(name) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));

    let task_names = tasks.map(task => task.name);

    let index = task_names.indexOf(name);

    if (index === -1) {
        return true;
    }

    return false;
}