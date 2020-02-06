const path = require('path')
const express = require('express')
const serveFavicon = require('serve-favicon')
const Chalk = require('chalk')

// require('dotenv').config(); using preload npm script

const port = process.env.PORT || 8000;
const app = express();

app.use(serveFavicon(path.resolve(__dirname, 'favicon.ico')));

// File server
app.use(express.static('public'));

// Routes
app.get('/', function(req, res){
  res.sendFile('index.html', {root: path.resolve(__dirname, 'public')});
});

app.listen(port, function(err){
  console.log(Chalk.green('Server created on port: ') + Chalk.red(port));
});

