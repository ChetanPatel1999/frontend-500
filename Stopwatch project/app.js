let timer = document.querySelector(".timer")
let stop = document.querySelector("#stop")
let start = document.querySelector("#start")

let mins = 0;
let secs = 0;
let msecs = 0;

start.onclick = () => {
    setInterval(startTimer, 10)
}
function startTimer() {
    msecs++;
    if (msecs == 100) {
        secs++;
        msecs = 0;
        if (secs == 60) {
            mins++;
            secs = 0;
        }
    }
    let strmsecs = msecs < 10 ? `0${msecs}` : msecs;
    let strsecs = secs < 10 ? `0${secs}` : secs;
    let strmins = mins < 10 ? `0${mins}` : mins;

    timer.innerHTML = `${strmins} : ${strsecs} : ${strmsecs}`
}