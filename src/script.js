// this is incomplete

// https://css-tricks.com/the-javascript-behind-touch-friendly-sliders/
// https://developers.google.com/web/fundamentals/design-and-ux/input/touch

// https://www.youtube.com/watch?v=YxMtL6lJbZw

// https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture

// detect IE 10, note this setup is using flex box rather than the width: x00% way of stacking slides. (jQuery)

// if (navigator.msMaxTouchPoints) {
//   $('#slider').addClass('ms-touch');

// Listed for the scroll event and move the image with translate.

//   $('#slider').on('scroll', function() {
//     $('.slide-image').css('transform','translate3d(-' + (100-$(this).scrollLeft()/6) + 'px,0,0)');
//   });
// }

// TODO:
// if at the start prevent going backwards

// Selectors
const slider = document.querySelector('.slider');
const holder = document.querySelector('.slide-wrapper');

// all side images
// const imgSlide = document.querySelectorAll('.slide-image');

// Define these as global variables so we can use them across the entire script.
let startingX = undefined; // Mouse down X position

// Flag to filter out move events that have not pre-ceeded a mouse down
let isDown = undefined;

// Track the card display position
let currentPosition = 0; // translate:transform/scroll position
let index = 0; // displayed card number

// Helpers

// get the tansformX value of the holder
const getTranslateXValue = () => {
  const transformationMatrix = window
    .getComputedStyle(holder)
    .getPropertyValue('transform');

  if (transformationMatrix !== 'none') {
    return parseInt(transformationMatrix.split(',')[4].trim());
  }
};

// Extract Event Handlers to address pointer, mouse and touch events
const gestureStart = (e) => {
  e.preventDefault();
  console.log('mousedown');
  // console.log(getTranslateXValue());
  startingX = e.pageX;
  isDown = true;
};

const gestureMove = (e) => {
  if (!isDown) return;
  const currentX = e.pageX;
  const diff = currentX - startingX;
  holder.style.transform = `translateX(${getTranslateXValue() + diff}px)`;
};

const gestureEnd = (e) => {
  e.preventDefault();
  console.log('mouseup');
  isDown = false;
};

// Adding Events Handlers
holder.addEventListener('pointerdown', gestureStart);
holder.addEventListener('pointermove', gestureMove);
holder.addEventListener('pointerup', gestureEnd);
