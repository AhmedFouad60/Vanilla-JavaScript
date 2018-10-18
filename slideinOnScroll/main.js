//Select all images
const slideImages = document.querySelectorAll('.slide-in');


function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
}
    
function checkSlide() {
  slideImages.forEach(slideimage => {
    //half way through the image
    const slideInAt = window.scrollY + window.innerHeight - slideimage.height / 2;
    //the bottom of the image
    const imageBottom = slideimage.offsetTop + slideimage.height;
    const isHalfShown = slideInAt > slideimage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      slideimage.classList.add('active');
    } else {
      slideimage.classList.remove('active');
      
    }
    console.log(slideInAt);
  });
  
 }

//Event listeners

window.addEventListener('scroll',debounce(checkSlide))