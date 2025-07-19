//generating random hex
const RandomColor = ()=>{
    const hex = '0123456789ABCDEF';
    let color ='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

const bg = document.querySelector('body');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const hexDisplay = document.getElementById('hex');

let intervalValid;

start.addEventListener('click',()=>{
    intervalValid= setInterval(()=>{
        const newbg = RandomColor();
        bg.style.backgroundColor = newbg;
        hexDisplay.textContent = newbg;
    },2000); 
    const newbg = RandomColor();
    bg.style.backgroundColor = newbg;
    hexDisplay.textContent = newbg;
})

stop.addEventListener('click',()=>{
    clearInterval(intervalValid);
    
})