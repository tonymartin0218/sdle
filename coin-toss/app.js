//Actual code
const coin = document.querySelector('.coin');
const result = document.querySelector('.result');
const heads = document.querySelector('.coin .heads img');
const tails = document.querySelector('.coin .tails img');
const selectCoin = document.querySelector('#coin');
const button = document.querySelector('.button');
const arrow = document.querySelector('.arrow');
button.addEventListener('click', flipCoin);
window.addEventListener('keydown', function(evt){
    if(evt.key == "Enter"){
        flipCoin();
    }
});
const src = "";
selectCoin.addEventListener('change', function(){
    if(this.value == 0){
        heads.src = "images/heads.png";
        tails.src = "images/tails.png";
    } else {
        heads.src = `images/heads${this.value}.png`;
        tails.src = `images/tails${this.value}.png`;
    }
    result.innerHTML = "MrBrainless";
})

function flipCoin(){
    coin.style.animation = "none";
    console.log('Clicked');
    let number = Math.random();
        if(number<0.5){
            setTimeout(function(){
                coin.style.animation = "flip-heads 3s forwards";
                result.innerHTML = "MrBrainless";
            },10);
            setTimeout(function(){
                result.innerHTML = "You got HEADS";
            },3000)
        } else {
            setTimeout(function(){
                coin.style.animation = "flip-tails 3s forwards";
                result.innerHTML = "MrBrainless";
            },10)
            setTimeout(function(){
                result.innerHTML = "You got TAILS";
            },3000)
        }
}