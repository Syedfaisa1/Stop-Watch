
let time = 0;
let intervalId;
let lapCount = 0;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor((time % 60) / 10);
    let milliseconds = time % 10;
    document.getElementById('display').textContent = 
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds + ':' +
        (milliseconds < 10 ? '0' : '') + milliseconds;
}

function startTimer() {
    intervalId = setInterval(() => {
        time++;
        updateDisplay();
    }, 10);
    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
}

function pauseTimer() {
    clearInterval(intervalId);
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
}

function resetTimer() {
    clearInterval(intervalId);
    time = 0;
    updateDisplay();
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
    document.getElementById('lap-times').innerHTML = '';
    lapCount = 0;
}

function recordLap() {
    let lapTime = time;
    let lapElement = document.createElement('div');
    lapElement.textContent = 'Lap ' + (++lapCount) + ': ' + 
        (Math.floor(lapTime / 60) < 10 ? '0' : '') + Math.floor(lapTime / 60) + ':' + 
        (Math.floor((lapTime % 60) / 10) < 10 ? '0' : '') + Math.floor((lapTime % 60) / 10) + ':' + (lapTime % 10);
    document.getElementById('lap-times').appendChild(lapElement);
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);
