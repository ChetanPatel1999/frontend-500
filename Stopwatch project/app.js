let timer = document.querySelector(".timer")
let reset = document.querySelector("#reset")
let start = document.querySelector("#start")
let lap = document.querySelector("#lap")

let mins = 0;
let secs = 0;
let msecs = 0;
let id = null
let div = false;
let divBox = null;

start.onclick = () => {
    if (id == null) {
        id = setInterval(startTimer, 10)
        start.innerHTML = "Stop";
        start.style.backgroundColor = "red";
        reset.style.visibility = "visible";
        lap.style.visibility = "visible";
    }
    else {
        clearInterval(id);
        id = null;
        start.innerHTML = "Start";
        start.style.backgroundColor = "green";
    }
}

reset.onclick = () => {
    timer.innerHTML = "00 : 00 : 00";
    msecs = secs = mins = 0;
    clearInterval(id);
    id = null;
    start.innerHTML = "Start";
    start.style.backgroundColor = "green";
    reset.style.visibility = "hidden";
    reset.style.visibility = "hidden";
    lap.style.visibility = "hidden";
    divBox.remove();
    div = false;
}

lap.onclick = () => {
    if (div == false) {
        divBox = document.createElement("div");
        let p = document.createElement("p");
        let h1 = document.createElement("h1");
        h1.innerText = "timer Lap";
        divBox.classList.add("div-box");
        p.innerHTML = timer.innerHTML;
        div = true;
        divBox.append(h1);
        divBox.append(p);
        document.body.append(divBox);
    }
    else {
        let p = document.createElement("p");
        p.innerHTML = timer.innerHTML;
        divBox.append(p);
    }
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