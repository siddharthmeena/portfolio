// for loading 
let loadClass = document.querySelector('.loading');

window.addEventListener('load',function(){
    loadClass.parentElement.removeChild(loadClass);
});

// for text animation

let lastTitle = document.querySelector('.web');
let val = lastTitle.textContent;
let arr = val.split("");
lastTitle.textContent ="";
arr.forEach(item=>{
    lastTitle.innerHTML += "<span>"+item+"</span>"
})
let char =0;
let timer = setInterval(onTick,50);
function onTick(){
    const span = document.querySelectorAll('.content span')[char];
    span.classList.add('fade');
    char++;
    if(char ===arr.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
    timer = null;
}

// for scroll effect