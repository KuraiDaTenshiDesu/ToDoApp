export default function getDateString() {
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