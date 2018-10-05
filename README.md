This project is using: 2018-starter

## Global requirements
To package this (deleting node modules) you can use `npm run package`
- `del-cli` - `npm install --global del-cli`

## Getting started
- `npm i`
- `npm start` - NOTE: we are using `nodemon` to reset the serve on change.
- `npm-run-all --parallel task1 task2` - runs tasks in parallel
- `-s ` - run in silent mode

## Babel 
[Docs](https://babeljs.io/docs/en/babel-cli)
- `npx babel --version` - to check babel is correctly installed
- `npm babel-node` - to run babel on our build scripts including app.js

## Basic React implementation 
I have add basic react, see html and [these docs](https://reactjs.org/docs/add-react-to-a-website.html)


## JS files
Please note that JS on the html are using:
```html
  <script type="text/babel" src="js/main.js"></script>
```
Change this if you want to use normal JS


## Things to do
- Webpack

- use ejs templates and sass css
