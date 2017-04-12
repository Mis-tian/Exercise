/* eslint-disable */
var webpack = require('webpack');
var path = require('path');
var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = new express();
var port = 3001;

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { 
  noInfo: true, 
  publicPath: config.output.publicPath,
  filename:config.output.filename 
}));
app.use(webpackHotMiddleware(compiler));
// app.use(express.static(path.join(__dirname, '/')));
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/template.html')
});
app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
