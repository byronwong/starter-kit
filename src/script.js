// Resources
// https://css-tricks.com/the-javascript-behind-touch-friendly-sliders/
// https://developers.google.com/web/fundamentals/design-and-ux/input/touch
// https://www.youtube.com/watch?v=YxMtL6lJbZw
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture

// if (navigator.msMaxTouchPoints) {
//   $('#slider').addClass('ms-touch');

// Listed for the scroll event and move the image with translate.

//   $('#slider').on('scroll', function() {
//     $('.slide-image').css('transform','translate3d(-' + (100-$(this).scrollLeft()/6) + 'px,0,0)');
//   });
// }

// Selectors
const slider = document.querySelector('.slider');
const slideWrapper = document.querySelector('.slide-wrapper');

// all side images
// const imgSlide = document.querySelectorAll('.slide-image');

// Store the initial posiiton of the interaction
// Mouse down X position
let initialPosition = null;

// flag to differentiate when we are touching or not
// if not in play event will start firing as soon as the mouse is on the page
let isMoving = false;

// saving the state of the slide wrapper so it does not snap to the start on each
// new interaction
let transformX = 0;

slideWrapper.addEventListener('mousedown', (e) => {
  console.log(`e.pageX`, e.pageX);
  isMoving = true;
  initialPosition = e.pageX;
  const transformMatrix = window
    .getComputedStyle(slideWrapper)
    .getPropertyValue('transform');

  console.log(`transformMatrix`, transformMatrix);

  // if not none then it is 0 as defined above
  if (transformMatrix != 'none') {
    transformX = parseInt(transformMatrix.split(',')[4].trim());
  }
});

slideWrapper.addEventListener('mousemove', (e) => {
  if (isMoving) {
    const currentPosition = e.pageX;
    const diff = currentPosition - initialPosition;
    console.log(`diff`, diff);
    slideWrapper.style.transform = `translateX(${transformX + diff}px)`;
  }
});

slideWrapper.addEventListener('mouseup', (e) => {
  isMoving = false;
});

// Flag to filter out move events that have not pre-ceeded a mouse down
// let isDown = null;

// Track the card display position
// let currentPosition = 0; // translate:transform/scroll position
// let index = 0; // displayed card number

// Helpers

// get the tansformX value of the holder
// const getTranslateXValue = () => {
//   const transformationMatrix = window
//     .getComputedStyle(holder)
//     .getPropertyValue('transform');

//   if (transformationMatrix !== 'none') {
//     return parseInt(transformationMatrix.split(',')[4].trim());
//   }
// };

// Extract Event Handlers to address pointer, mouse and touch events
// const gestureStart = (e) => {
//   e.preventDefault();
//   console.log('mousedown');
//   // console.log(getTranslateXValue());
//   startingX = e.pageX;
//   isDown = true;
// };

// const gestureMove = (e) => {
//   if (!isDown) return;
//   const currentX = e.pageX;
//   const diff = currentX - startingX;
//   holder.style.transform = `translateX(${getTranslateXValue() + diff}px)`;
// };

// const gestureEnd = (e) => {
//   e.preventDefault();
//   console.log('mouseup');
//   isDown = false;
// };

// Adding Events Handlers
// holder.addEventListener('pointerdown', gestureStart);
// holder.addEventListener('pointermove', gestureMove);
// holder.addEventListener('pointerup', gestureEnd);
