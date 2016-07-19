var path = require('path');
var express = require('express');

var server = {
  app: function () {
    var app = express();
    var indexPath = path.join(__dirname, '/dist/index.html');
    var publicPath = express.static(path.join(__dirname, '/dist'));

    app.use('/', publicPath);
    app.get('/', function (_, res) {
      res.sendFile(indexPath);
    });

    app.listen(3033);

    return server;
  }
};

server.app();

module.exports = server;
