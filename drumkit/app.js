
window.addEventListener('keydown', (e)=>{

    let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);


    if(!sound) { return }

    sound.currentTime = 0; // rewinds the clip
    sound.play();

    key.classList.add("sound_active");
});


let keys = document.querySelectorAll('.sound');
keys.forEach(key => {
    key.addEventListener('transitionend', (e)=>{e.target.classList.remove("sound_active")})
});