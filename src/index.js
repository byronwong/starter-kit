import _ from 'lodash';

import './style.css';

// used to demo creation of seperate bundles
import printMe from './print.js';

// import TestPic from './assets/images/pawel-czerwinski-oykbZuvajO0-unsplash.jpg';

// => Note to future self
// - This tests Webpack is working
// - You can choose not to use this and directly update the index.html in dist
function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
