const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function slide() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });

  currentSlide++;

  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
}

setInterval(slide, 5000); // Change the interval time as needed