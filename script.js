// Step 1: Get DOM elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let sliderDom = document.querySelector('.slider');
let slidesDom = sliderDom.querySelector('.slides');
let thumbsBorderDom = document.querySelector('.slider .thumbs');
let thumbsItemsDom = thumbsBorderDom.querySelectorAll('.slide');
let progressDom = document.querySelector('.slider .progress');

thumbsBorderDom.appendChild(thumbsItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type){
    let slidesItemsDom = slidesDom.querySelectorAll('.slide');
    let thumbsItemsDom = document.querySelectorAll('.thumbs .slide');
    
    if(type === 'next'){
        slidesDom.appendChild(slidesItemsDom[0]);
        thumbsBorderDom.appendChild(thumbsItemsDom[0]);
        sliderDom.classList.add('next');
    }else{
        slidesDom.prepend(slidesItemsDom[slidesItemsDom.length - 1]);
        thumbsBorderDom.prepend(thumbsItemsDom[thumbsItemsDom.length - 1]);
        sliderDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        sliderDom.classList.remove('next');
        sliderDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}
