import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import Chalk from 'chalk';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

const port = process.env.PORT || 8000;
const app = express();

app.use(favicon(path.resolve(__dirname, 'favicon.ico')));

// links express with webpack middleware
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// File server
app.use(express.static('dist'));

// Routes
app.get('/', function(req, res){
  res.sendFile('index.html', {root: path.resolve(__dirname, 'dist')});
});

app.listen(port, function(err){
  console.log(Chalk.green('Server created on port: ') + Chalk.red(port));
});

