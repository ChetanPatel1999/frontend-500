let song = document.querySelector("#song");
let playBtn = document.querySelector("#play-btn");
let progress = document.querySelector("#progress");
let forward = document.querySelector(".fa-forward");
let updateid;
let songArr = ["song/Dhun.mp3", "song/dhur.mp3"]
let i = 0;
forward.onclick = () => {
    i++;
    song.src = songArr[i];
    if (i == songArr.length - 1) {
        i = -1;
    }
}
song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime
}

playBtn.onclick = () => {
    if (playBtn.classList.contains("fa-play")) {
        song.play();
        playBtn.classList.add("fa-pause");
        playBtn.classList.remove("fa-play");

        updateid = setInterval(() => {
            progress.value = song.currentTime;
        }, 500)
    }
    else {
        clearInterval(updateid);
        song.pause();
        playBtn.classList.add("fa-play");
        playBtn.classList.remove("fa-pause");
    }
}

progress.onchange = () => {
    song.currentTime = progress.value;
    song.play();
    playBtn.classList.add("fa-pause");
    playBtn.classList.remove("fa-play");
    clearInterval(updateid);
    updateid = setInterval(() => {
        progress.value = song.currentTime;
    }, 500)
}
