let number = document.getElementById('number')
let counter = 0
const startingMinutes = 1;
let time = startingMinutes * 60;


const countdownEl = document.getElementById('number')
// setInterval(updateCountdown, 1000);
animateProgressBar(time);
startTimer(time);

function startTimer(duration) {
    let start = Date.now(), diff, minutes, seconds;
    timer();
    let id = setInterval(timer, 1000);
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);

        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdownEl.innerHTML = `${minutes}: ${seconds}`;

        if (diff <= 0) {
            clearInterval(id);
        }
    }
}
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

document.getElementById('timer-pomo').setAttribute("transform", "scale(1.5)");





