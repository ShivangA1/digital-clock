let timer = null;
let elapsedTime = 0;
let id;
let isRunning = false;
const display = document.getElementById("display");
const startBtn = document.getElementById("button1");
const stopBtn = document.getElementById("button2");
const restBtn = document.getElementById("button3");


restBtn.onclick = reset;
startBtn.onclick = start;
stopBtn.onclick = pause;

function start() {
    if (!isRunning) {
        timer = Date.now() - elapsedTime;
        id = setInterval(count, 10);
        isRunning = true;
    }
    else {
    }
}

function reset() {
    clearInterval(id);
    display.textContent = `00:00:00:00`;
    isRunning = false;
    elapsedTime = 0;
}

function count() {
    const time = Date.now();
    elapsedTime = time - timer;
    let displayTime = new Date(elapsedTime);
    display.textContent = `${displayTime.getUTCHours().toString().padStart(2, 0)}:${displayTime.getUTCMinutes().toString().padStart(2, 0)}:${displayTime.getUTCSeconds().toString().padStart(2, 0)}:${displayTime.getUTCMilliseconds().toString().slice(0, 2)}`
}

function pause() {
    if (!isRunning) {
        reset();
    }
    else {
        clearInterval(id);
        isRunning = false
    }
}