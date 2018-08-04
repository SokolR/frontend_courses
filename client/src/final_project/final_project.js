import './final_project.scss';

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slider-item");
    let btn = document.getElementsByClassName("slider-btn");
    for (i = 0; i < slides.length; i++) {
        slides[i].className =  slides[i].className.replace("slider-item__active"); 
    }
    slideIndex++;
    for (i = 0; i < btn.length; i++) {
      btn[i].className = btn[i].className.replace("slider-btn__active");
    }
    
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].className += " slider-item__active";
    btn[slideIndex-1].className += " slider-btn__active"; 
    setTimeout(showSlides, 4000);
    
}