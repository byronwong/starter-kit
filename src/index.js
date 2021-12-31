import _ from "lodash";

// => Note to future self
// - This tests Webpack is working
// - You can choose not to use this and directly update the index.html
function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
