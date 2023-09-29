const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const restart = document.querySelector('.game-over')
const score = document.querySelector('.score-n')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}      


let n = 0;
const loop = setInterval(() =>{
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
    
    if((pipePosition <= 120) && (marioPosition < 90) && (pipePosition > 0)){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = '/images/game-over.png' 
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        
        restart.style.display = 'block'

        clearInterval(loop)
    }
    else if(pipePosition <= 120){
        n++
    }
    score.innerHTML = parseInt(n/15)

},10)

restart.addEventListener('click', () => location.reload())

document.addEventListener('keydown', jump)
