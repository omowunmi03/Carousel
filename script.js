const track = document.querySelector('carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNavs = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNavs.children);

const slidesWidth = slides[0].getBoundingClientRect().width;

//slides[0].style.left = slidesWidth * 0 + 'px';
//slides[1].style.left = slidesWidth * 1 + 'px';
//slides[2].style.left = slidesWidth * 2 + 'px';
//slides[3].style.left = slidesWidth * 3 + 'px';
//slides[4].style.left = slidesWidth * 4 + 'px';
//slides[5].style.left = slidesWidth * 5 + 'px';

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) =. {
    track.style.transform = 'translateX('
}
 
