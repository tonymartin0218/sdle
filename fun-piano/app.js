//Actual code
const keys = document.querySelectorAll('.key');
const keySpan = document.querySelectorAll('.key span');
const container = document.querySelector('.container');
const show = document.querySelector('#show');
const funny = document.querySelector('#funny');
window.addEventListener('dblclick', () => {
    document.documentElement.requestFullscreen();
})
for(let i=0; i<keys.length; i++){
    keys[i].addEventListener('click', function(){
        if(funny.checked){
            const audio = document.getElementById(i);
            audio.currentTime = 0;
            audio.play();
        } else {
            const id = this.getAttribute('data-id');
            const audio = document.getElementById(id);
            audio.currentTime = 0;
            audio.play();
        }
    });
    if(show.checked){
        keySpan[i].style.display = "block";
    } else {
        keySpan[i].style.display = "none";
    }
}
window.addEventListener('keydown', function(e){
    if(e.repeat) return;
    const value = e.key;
    let btn;
    for(let i=0; i<keys.length; i++){
        const attrib = keys[i].getAttribute('data-id');
        if(value == attrib){
            btn = keys[i];
        }
    }
    btn.click();
    if(value == "w" || value == "e" || value == "t" || value == "y" || value == "u" || value == "o" || value == "p"){
        btn.classList.add('activeBlack');
        setTimeout(() => {
            btn.classList.remove('activeBlack');
        }, 250)
    } else {
        btn.classList.add('activeWhite');
        setTimeout(() => {
            btn.classList.remove('activeWhite');
        }, 250)
    }
})
show.addEventListener('change', function(){
    for(let i=0; i<keys.length; i++){
        if(show.checked){
            keySpan[i].style.display = "block";
        } else {
            keySpan[i].style.display = "none";
        }
    }
})
