let timer = null;
let elapsedTime = 0;
let id;
let isRunning = false;
const display = document.getElementById("display");
const startBtn = document.getElementById("button1");
const stopBtn = document.getElementById("button2");
const restBtn = document.getElementById("button3");
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");
const r4 = document.getElementById("r4");
let records = ["00:00:00:00", "00:00:00:00", "00:00:00:00", "00:00:00:00"];
let update = updateRecords(0);

restBtn.onclick = reset;
startBtn.onclick = start;
stopBtn.onclick = pause;

function start() {
    if (!isRunning) {
        timer = Date.now() - elapsedTime;
        id = setInterval(count, 10);
        isRunning = true;
    }
}

function reset() {
    clearInterval(id);
    display.textContent = `00:00:00:00`;
    isRunning = false;
    elapsedTime = 0;
    [records[0], records[1], records[2], records[3]] = [
        "00:00:00:00",
        "00:00:00:00",
        "00:00:00:00",
        "00:00:00:00",
    ];
    [r1.textContent, r2.textContent, r3.textContent, r4.textContent] = [
        records[0],
        records[1],
        records[2],
        records[3],
    ];
    update = updateRecords(0);
}
function count() {
    const time = Date.now();
    elapsedTime = time - timer;
    let displayTime = new Date(elapsedTime);
    display.textContent = `${displayTime.getUTCHours().toString().padStart(2, 0)}:${displayTime.getUTCMinutes().toString().padStart(2, 0)}:${displayTime.getUTCSeconds().toString().padStart(2, 0)}:${displayTime.getUTCMilliseconds().toString().slice(0, 2).padStart(2, 0)}`;
}

function pause() {
    if (!isRunning) {
        reset();
    }
    else {
        clearInterval(id);
        isRunning = false;
        update.update();
        [r1.textContent, r2.textContent, r3.textContent, r4.textContent] = [
            records[0],
            records[1],
            records[2],
            records[3],
        ];
    }
}

function updateRecords(count, iteration) {
    function update() {
        const displayTime = new Date(elapsedTime);
        const time = `${displayTime.getUTCHours().toString().padStart(2, 0)}:${displayTime.getUTCMinutes().toString().padStart(2, 0)}:${displayTime.getUTCSeconds().toString().padStart(2, 0)}:${displayTime.getUTCMilliseconds().toString().slice(0, 2).padStart(2, 0)}`;
        records[count] = time;
        count = (count + 1) % 4;
    }
    return { update };
}
