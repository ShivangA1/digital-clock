
const head = document.getElementById("clock");
const btn = document.getElementById("format")
let id;
function standardTime() {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    hours = hours.toString().padStart(2, 0);
    minutes = minutes.toString().padStart(2, 0);
    seconds = seconds.toString().padStart(2, 0);
    head.textContent = `${hours}:${minutes}:${seconds}`;
}

function meridianTime() {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meri = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    minutes = minutes.toString().padStart(2, 0);
    seconds = seconds.toString().padStart(2, 0);
    head.textContent = `${hours}:${minutes}:${seconds} ${meri}`;
}
let isMeridian = false;
function format() {
    if (isMeridian) {
        clearInterval(id);
        standardTime();
        id = setInterval(standardTime, 1000);
        isMeridian = false;
    }
    else {
        clearInterval(id);
        meridianTime();
        id = setInterval(meridianTime, 1000);
        isMeridian = true;
    }
}

standardTime();
id = setInterval(standardTime, 1000);
btn.onclick = format;