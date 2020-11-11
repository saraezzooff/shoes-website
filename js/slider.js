const slides = document.querySelectorAll('.slide'),
      number_controls = document.querySelectorAll('.number-controls div'),
      btnSlide1 = number_controls[0],
      btnSlide2 = number_controls[1],
      btnSlide3 = number_controls[2],
      next_control = document.querySelector('.next'),
      prev_control = document.querySelector('.prev');
let   SlideIndex = 0;


btnSlide1.addEventListener('click',()=>{
    ShowSlide();
    slides[0].classList.add('active');
    number_controls[0].classList.add('active');
});

btnSlide2.addEventListener('click',()=>{
    ShowSlide();
    slides[1].classList.add('active');
    number_controls[1].classList.add('active');

});

btnSlide3.addEventListener('click',()=>{
    ShowSlide();
    slides[2].classList.add('active');
    number_controls[2].classList.add('active');

});

next_control.addEventListener('click',()=>{
    slides[SlideIndex].classList.remove('active');
    number_controls[SlideIndex].classList.remove('active');
    SlideIndex = (SlideIndex + 1) % slides.length;
    slides[SlideIndex].classList.add('active');
    number_controls[SlideIndex].classList.add('active');
});

// 

prev_control.addEventListener('click',(e)=>{
    slides[SlideIndex].classList.remove('active');
    number_controls[SlideIndex].classList.remove('active');
    SlideIndex = (SlideIndex - 1 +slides.length) % slides.length;
    slides[SlideIndex].classList.add('active');
    number_controls[SlideIndex].classList.add('active');
 });


// iteration of prev. active slide

function ShowSlide(){
    for(let i=0;i<3;i++){
        if(slides[i].classList.value === "slide active"){
            slides[i].classList.remove('active');
            number_controls[i].classList.remove('active'); 
        }
    }
}

// automtice animation of the slider.
// Autoplay Feature


function automatic_showSlides() {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
      slides[i].classList.remove('active'); 
    }
    SlideIndex++;
    if (SlideIndex > slides.length) {SlideIndex = 1}    
    for (i = 0; i < number_controls.length; i++) {
       number_controls[i].className = number_controls[i].className.replace(" active", "");
     }
    slides[SlideIndex-1].style.display = "block";
    slides[SlideIndex-1].classList.add('active');  
    number_controls[SlideIndex-1].className += " active";
    setTimeout(automatic_showSlides, 2000); // Change image every 2 seconds
}

//automatic_showSlides();