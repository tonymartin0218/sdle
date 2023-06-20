//Actual code
function preload(){
    const sound = new Audio();
    for(let i=0;i<17;i++){
        sound.src = "animal-sounds/" + sounds[i];
        sound.load();
    }
}
preload();
const keys = document.querySelectorAll('.key');
const keySpan = document.querySelectorAll('.key span');
const container = document.querySelector('.container');
const show = document.querySelector('#show');
const funny = document.querySelector('#funny');
const sounds = ['bee.mp3', 'bird-whistle.mp3', 'cow2.mp3', 'cat2.mp3', 'goat.mp3', 'funny-kiss.mp3', 'elephant.mp3', 'horse.mp3', 'pig.mp3', 'cartoon-giggle.mp3', 'game-character.mp3', 'pigeon.mp3', 'funny-sneeze.mp3', 'sheep.mp3', 'child-laugh.mp3', 'monkey-laugh.mp3', 'clown-horn.mp3'];
const audio = new Audio();
keys.forEach(key => {
    key.addEventListener('click', function(){
        const value = key.getAttribute('data-value');
        // console.log(value)
        const val = key.innerText;
        audio.currentTime = 0;
        if(funny.checked){
                audio.src="animal-sounds/" + sounds[value];
        } else {
            audio.src = "audio/"+ val + ".mp3";
        }
        audio.play();
    })
});
show.addEventListener('change', function(){
   
        for(let i=0;i<keySpan.length; i++){
            if(show.checked){
            keySpan[i].style.display = "block";
        } else {
            keySpan[i].style.display = "none";
        }
    }
});
window.addEventListener('keydown', function(e){
    if(e.repeat) return
    const keyVal = e.key;
    let button;
    for(let i=0;i<keys.length;i++){
        const val = keys[i].innerText.toLowerCase();
        if(val === keyVal){
            button = keys[i];
        }
    }
    if(keyVal == "w" || keyVal == "e" || keyVal == "t" || keyVal == "y" || keyVal == "u" || keyVal == "o" || keyVal == "p"){
        button.classList.add('activeBlack');
        setTimeout(() => {
            button.classList.remove('activeBlack');
        }, 300)
    } else {
        button.classList.add('activeWhite');
        setTimeout(() => {
            button.classList.remove('activeWhite');
        }, 300)
    }
    button.click();
    console.log(button)
});

window.addEventListener('dblclick', () => {
    document.documentElement.requestFullscreen();
})
