import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import Chalk from 'chalk';
import opn from 'opn';

const port = process.env.PORT || 8000;
const app = express();

app.use(favicon(path.resolve(__dirname, 'favicon.ico')));

// File server
app.use(express.static('public'));

// Routes
app.get('/', function(req, res){
  res.sendFile('index.html', {root: path.resolve(__dirname, 'dist')});
});

app.listen(port, function(err){
  console.log(Chalk.green('Server created on port: ') + Chalk.red(port));
});

// Opens the url in the default browser
opn(`http://localhost:${port}/`);
