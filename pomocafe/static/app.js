const countdownEl = document.querySelector('.number')
class Pomodoro {
    constructor(startTime, stopTime) {
        this. id = null;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.minutes = 0;
        this.seconds = 0; 
    }

    /* Used to start the timer with the current time */
    startTimer(duration) {
        let start = Date.now(), diff, minutes, seconds;
        timer();
        this.id = setInterval(timer, 1000);
        function timer() {
            diff = duration - (((Date.now() - start) / 1000) | 0);
    
            minutes = (diff / 60) | 0;
            seconds = (diff % 60) | 0;
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            countdownEl.innerHTML = `${minutes}:${seconds}`;
    
            if (diff <= 0) {
                clearInterval(id);
            }
        }
    }

    /* Used when the player wants to stop the timer, it will pause timer */
    stopTimer() {
        clearInterval(this.id);
        this.id = null;
        this.updateDisplay(25,0);
    }

    /* Used to trigger short break option: 5 minutes */
    shortBreak() {

    }

    /* Used to trigger long break option: 15 minutes */
    longBreak() {

    }

    updateDisplay(minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        countdownEl.innerHTML = `${minutes}:${seconds}`;
    }
}



let number = document.getElementById('number');
let counter = 0;
const startingMinutes = 25;
let time = startingMinutes * 60;

const pomodoro = new Pomodoro(time, 0);
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
    pomodoro.startTimer(time)
})

stopButton.addEventListener('click', () => {
    pomodoro.stopTimer();
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





