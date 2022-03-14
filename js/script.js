"use strict";


    document.addEventListener("DOMContentLoaded",()=>{
        const d = document;
        let index = 1;
        const container = d.querySelector(".container"),
            btnBox = d.querySelector(".btn-box"),// контейнер с кнопками
            prev = d.querySelector(".prev"), // левая кнопка
            next = d.querySelector(".next"), // правая кнопка
            slidesBox = d.querySelector(".slides-box"), // контейнер с картинками
            slides = d.querySelectorAll(".slide"); //картики
    
        (function sizesSlider(){
            container.style.width = slides[0].offsetWidth+"px";
            container.style.height = slides[0].offsetHeight+"px";
            slidesBox.style.transform = "translateX("+(-slidesBox.offsetWidth)+"px)";
            prev.style.top = container.offsetHeight/2-prev.offsetWidth/2+"px";
            next.style.top = container.offsetHeight/2-next.offsetWidth/2+"px";    
        })();

        function slider() {
            slidesBox.style.transform = "translateX(" + (-index * slidesBox.offsetWidth) + "px)";
            slidesBox.style.transition = "transform .5s ease-in-out";
        }
        btnBox.addEventListener("click", (EO) => {
            if (EO.target.parentNode.classList.contains("prev")) {
                index <= 0 ? false : index--;
                slider();
            } else if (EO.target.parentNode.classList.contains("next")) {
                index >= slides.length - 1 ? false : index++;
                slider();
            }
        });
    
        slidesBox.addEventListener('transitionend',()=>{
            if(index == slides.length-1){
                index=1;
                slidesBox.style.transition = "none";
                slidesBox.style.transform = "translateX(" + (-index * slidesBox.offsetWidth) + "px)";
            }else if(index==0){
                index=slides.length-2;
                slidesBox.style.transition = "none";
                slidesBox.style.transform = "translateX(" + (-index * slidesBox.offsetWidth) + "px)";
    
            }
        });
    
    });



