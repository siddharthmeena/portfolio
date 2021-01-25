let loadClass = document.querySelector('.loading');

window.addEventListener('load',function(){
    loadClass.parentElement.removeChild(loadClass);
});