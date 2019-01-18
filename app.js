import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import Chalk from 'chalk';

const port = process.env.PORT || 8000;
const app = express();

app.use(favicon(path.resolve(__dirname, 'favicon.ico')));
app.use(express.static('dist')); // NOTE: serving out of source for now

app.get('/', function(req, res){
  res.sendFile('index.html', {root: path.resolve(__dirname, 'dist')});
});

app.listen(port, function(err){
  console.log(Chalk.green('Server created on port: ') + Chalk.red(port));
});

