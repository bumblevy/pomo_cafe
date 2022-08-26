const countdownEl = document.querySelector('.number')
const startingMinutes = 25;
let time = startingMinutes * 60;
class Pomodoro {
    constructor(startTime, stopTime, minutes, seconds) {
        this. id = null;
        this.startTime = startTime * 60;
        this.stopTime = stopTime;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    setMinutes(minutes) {
        this.minutes = minutes;
    }

    setSeconds(seconds) {
        this.seconds = seconds;
    }

    /* Used to start the timer with the current time */
    /* Reference code snippet from https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript */
    startTimer(duration) {
        let start = Date.now(), diff, minutes, seconds;
        this.id = setInterval(() => {
            /* Gives difference in seconds between timer time and time elapsed in seconds */
            diff = duration - (((Date.now() - start) / 1000) | 0);
            console.log(diff);
    
            minutes = (diff / 60) | 0;
            seconds = (diff % 60) | 0;

            this.minutes = minutes;
            this.seconds = seconds;
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            countdownEl.innerHTML = `${minutes}:${seconds}`;
    
            if (diff <= 0) {
                clearInterval(id);
            }

        }, 1000);
    }

    /* Used when the user wants to stop the timer, it will pause timer */
    stopTimer() {
        clearInterval(this.id);
        this.id = null;
        this.updateDisplay(this.minutes, this.seconds);
    }

    /* Used to trigger short break option: 5 minutes */
    shortBreak(minutes, seconds) {
        this.minutes = minutes;
        this.seconds = seconds;
        this.startTime = minutes * 60;
        this.updateDisplay(minutes, seconds);
    }

    /* Used to trigger long break option: 15 minutes */
    longBreak(minutes, seconds) {
        this.minutes = minutes;
        this.seconds = seconds;
        this.startTime = minutes * 60;
        this.updateDisplay(minutes, seconds);
    }

    updateDisplay(minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        countdownEl.innerHTML = `${minutes}:${seconds}`;
    }
}

let number = document.getElementById('number');
let counter = 0;

const pomodoro = new Pomodoro(25,0, 0, 0);
//pomodoro.startTimer(time)
// pomodoro.updateDisplay()

const pomodoroButton = document.querySelector('.button1');
const shortButton = document.querySelector('.button2');
const longButton = document.querySelector('.button3');
const startButton = document.querySelector('.button4');
const stopButton = document.querySelector('.button5');


pomodoroButton.addEventListener('click', () => {
    pomodoro.updateDisplay(25, 0);
})

startButton.addEventListener('click', () => {
    pomodoro.startTimer(pomodoro.startTime);
})

stopButton.addEventListener('click', () => {
    pomodoro.stopTimer();
})

shortButton.addEventListener('click', () => {
    pomodoro.shortBreak(5, 0);
})

longButton.addEventListener('click', () => {
    pomodoro.longBreak(15, 0);
})







// setInterval(updateCountdown, 1000);
// animateProgressBar(time);
// startTimer(time);

// function startTimer(duration) {
//     let start = Date.now(), diff, minutes, seconds;
//     timer();
//     let id = setInterval(timer, 1000);
//     function timer() {
//         diff = duration - (((Date.now() - start) / 1000) | 0);

//         minutes = (diff / 60) | 0;
//         seconds = (diff % 60) | 0;

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         countdownEl.innerHTML = `${minutes}: ${seconds}`;

//         if (diff <= 0) {
//             clearInterval(id);
//         }
//     }
// }


//     setInterval(function() {
//         minutes = Math.floor(timer / 60);
//         seconds = timer % 60;
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         countdownEl.innerHTML = `${minutes}: ${seconds}`;
//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// let id = setInterval(function() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60; 
//     seconds = seconds < 10? '0' + seconds: seconds;
//     countdownEl.innerHTML = `${minutes}: ${seconds}`;
//     time--;

//     if (time == 0) {
//         clearInterval(id);
//     }
// }, time);

// function updateCountdown() {
//     const minutes = Math.floor(time / 60);
//     let seconds = time % 60; 
//     seconds = seconds < 10? '0' + seconds: seconds;
//     countdownEl.innerHTML = `${minutes}: ${seconds}`;
//     time--;
// }

function animateProgressBar(seconds) {
    let timer = seconds + 2;
    let animationStr = "anim " + timer + "s linear forwards";
    document.getElementById('circle-anim').style.animation = animationStr;
}

//document.getElementById('timer-pomo').setAttribute("transform", "scale(1.5)");





