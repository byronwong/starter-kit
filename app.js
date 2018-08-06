import path from 'path';

import express from 'express';
import Chalk from 'chalk';

const port = process.env.PORT || 8000;
const app = express();

app.use(express.static('src')); // NOTE: serving out of source for now

app.get('/', function(req, res){
  res.sendFile('index.html', {root: path.resolve(__dirname, 'src')});
});

app.listen(port, function(err){
  console.log(Chalk.blue('Server created on port: ') + Chalk.red(port));
});

