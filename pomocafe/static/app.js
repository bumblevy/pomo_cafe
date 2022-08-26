const countdownEl = document.querySelector('.number')
const startingMinutes = 25;
// let time = startingMinutes * 60;
let pomoCompleted = 0;
let pomodoroClicked = false;
let shortBreakClicked = false;
let longBreakClicked = false;
let triggerShort = false;
let triggerPomo = false;



let pomodoroTime = 25;
let shortBreakTime = 5;
let longBreakTime = 15;


function setTimerSettings (pTime, sTime, lTime) {
    pomodoroTime = pTime;
    shortBreakTime = sTime;
    longBreakTime = lTime;
}

class Pomodoro {
    constructor(startTime = pomodoroTime, minutes = 0, seconds = 0) {
        this. id = null;
        this.startTime = startTime * 60;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    setMinutes(minutes) {
        this.minutes = minutes;
    }

    setSeconds(seconds) {
        this.seconds = seconds;
    }

    resetSettings() {
        pomoCompleted = 0;
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
                console.log("Timer is done!!!");
                clearInterval(this.id);
                console.log("Pomocompleted " + pomoCompleted);
                console.log("Pomocompleted " + pomoCompleted);
                if (pomoCompleted >= 0 && pomoCompleted < 4 && pomodoroClicked === true) {
                    console.log("Time to trigger short or long");
                    pomoCompleted = pomoCompleted + 1;
                    pomodoroClicked = false;
                    if (pomoCompleted < 4) {
                        shortButton.click();
                    } else if (pomoCompleted == 4) {
                        longButton.click();
                    }
                    console.log("Pomocompleted " + pomoCompleted);
                } else if (triggerShort === true && pomoCompleted < 4) {
                    console.log("Time to trigger pomodoro");
                    pomodoroButton.click();
                    triggerShort = false;
                    console.log("Pomocompleted " + pomoCompleted);
                } else {
                    console.log("Done with cycle");
                    pomodoroButton.click();
                }
                // Add functionality to make a sound when timer is done
                // audio.play()
                // notify user 
            }

        }, 1000);
    }

    /* Used when the user wants to stop the timer, it will pause timer */
    stopTimer() {
        clearInterval(this.id);
        this.id = null;
        this.updateDisplay(this.minutes, this.seconds);
    }

    setPomodoro(minutes, seconds) {
        this.minutes = minutes;
        this.seconds = seconds;
        this.startTime = minutes * 60;
        this.updateDisplay(minutes, seconds);
    }

    /* Used to trigger short break option: 5 minutes */
    shortBreak(minutes, seconds) {
        this.minutes = minutes;
        this.seconds = seconds;
        this.startTime = minutes * 60;
        this.updateDisplay(minutes, seconds);
    }

    /* Used to set the long break option: 15 minutes */
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

setTimerSettings(0.1, 0.15, 0.5);
console.log("Pomodoro Time " + pomodoroTime);
const pomodoro = new Pomodoro(pomodoroTime, 0, 0 , true);
//pomodoro.startTimer(time)
// pomodoro.updateDisplay()

const pomodoroButton = document.querySelector('.button1');
const shortButton = document.querySelector('.button2');
const longButton = document.querySelector('.button3');
const startButton = document.querySelector('.button4');
const stopButton = document.querySelector('.button5');

// Have setting on Pomodoro when the site is loaded
pomodoroButton.focus();
pomodoro.updateDisplay(pomodoroTime, 0);
pomodoroClicked = true;

console.log("Pomo completed " + pomoCompleted);

pomodoroButton.addEventListener('click', () => {
    pomodoroClicked = true;
    triggerShort = false;
    pomodoro.setPomodoro(pomodoroTime);
    pomodoroButton.focus();
    pomodoro.updateDisplay(pomodoroTime, 0);
})

startButton.addEventListener('click', () => {
    pomodoro.startTimer(pomodoro.startTime);
    stopButton.innerHTML = "Pause";
})

stopButton.addEventListener('click', () => {
    pomodoro.stopTimer();
    stopButton.innerHTML = "Stop";
})

shortButton.addEventListener('click', () => {
    // pomodoro.shortBreak(5, 0);
    triggerShort = true;
    shortBreakClicked = true;
    shortButton.focus();
    pomodoro.shortBreak(shortBreakTime, 0);
    // call shortBreakFunction
})

longButton.addEventListener('click', () => {
    // pomodoro.longBreak(15, 0);
    longBreakClicked = true;
    longButton.focus();
    pomodoro.longBreak(longBreakTime, 0);
})


function animateProgressBar(seconds) {
    let timer = seconds + 2;
    let animationStr = "anim " + timer + "s linear forwards";
    document.getElementById('circle-anim').style.animation = animationStr;
}

//document.getElementById('timer-pomo').setAttribute("transform", "scale(1.5)");





