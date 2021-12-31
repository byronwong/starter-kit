import _ from 'lodash';

import './style.css';

// import TestPic from './assets/images/pawel-czerwinski-oykbZuvajO0-unsplash.jpg';

// => Note to future self
// - This tests Webpack is working
// - You can choose not to use this and directly update the index.html in dist
function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
