const player = document.querySelector('video');
const playstop = document.querySelector('.toggle');
const skipBack = document.querySelector('.backward');
const skipAhead = document.querySelector('.forward');
const progressBar = document.querySelector('.progress');
const progress = document.querySelector('.progress__filled');
const playback = document.querySelector('input[name="playbackRate"]');
const volume = document.querySelector('input[name="volume"]')


let togglePlay = e => {
    if (player.paused) {
        player.play();
        playstop.innerHTML = '||';
    } else {
        player.pause();
        playstop.innerHTML = '►';
    }
}

let skip = e => {
    player.currentTime = player.currentTime + Number(e.target.dataset.skip);
};

let UpdateProgress = e => {
    progress.style.flexBasis = `${(player.currentTime / player.duration)* 100}%`;
};


volume.addEventListener('input', e => {
    player.volume = e.target.value;
});

playback.addEventListener('input', e => {
    player.playbackRate = e.target.value
})

progressBar.addEventListener('click', e=>{
    player.currentTime = (e.offsetX / progressBar.offsetWidth) * player.duration;
});

playstop.addEventListener('click', togglePlay);

skipBack.addEventListener('click', skip);
skipAhead.addEventListener('click', skip);

player.addEventListener('timeupdate', UpdateProgress);
player.addEventListener('click', togglePlay);
