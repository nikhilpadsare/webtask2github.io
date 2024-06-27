// Stopwatch functionality
let startTime;
let intervalId;
let running = false;

const display = document.querySelector('.display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

function formatTime(time) {
    const pad = (num) => (num < 10 ? `0${num}` : num);
    const hours = pad(Math.floor(time / 3600));
    const minutes = pad(Math.floor((time % 3600) / 60));
    const seconds = pad(time % 60);
    return `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
    if (!running) {
        startTime = Date.now();
        intervalId = setInterval(updateDisplay, 1000);
        running = true;
    }
}

function pauseTimer() {
    clearInterval(intervalId);
    running = false;
}

function resetTimer() {
    clearInterval(intervalId);
    running = false;
    display.textContent = '00:00:00';
}

function updateDisplay() {
    const currentTime = Math.floor((Date.now() - startTime) / 1000);
    display.textContent = formatTime(currentTime);
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
