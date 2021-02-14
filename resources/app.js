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


function dynamicAbout(){
    let aboutClass = document.querySelector('.aboutContent');
    let aboutPostion = aboutClass.getBoundingClientRect().top;

    let screenPostion = (window.innerHeight)/2;
    if(screenPostion > aboutPostion){
        aboutClass.classList.add("afterContent");
    }
}

window.addEventListener('scroll',dynamicAbout);
document.querySelector('.menu').addEventListener('click',function(){
    this.classList.toggle('open');
    document.querySelector('.hamburgur').classList.toggle('open');
    document.querySelector('.overlay').classList.toggle('open');
})