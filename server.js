var path = require('path');
var express = require('express');

var server = {
  app: function () {
    var app = express();
    var indexPath = path.join(__dirname, '/dist/index.html');
    var publicPath = express.static(path.join(__dirname, '/dist'));

    app.set('port', (process.env.PORT || 5000));
    app.use('/', publicPath);
    app.get('/', function (_, res) {
      res.sendFile(indexPath);
    });

    app.listen(app.get('port'), function () {
      console.log('Node app is running on port', app.get('port'));
    });

    return server;
  }
};

server.app();

module.exports = server;
