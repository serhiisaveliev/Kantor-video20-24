var http = require('http');
//var debug = require('debug')('server');
//var log = require('winston');
//
//var server = http.createServer();
//
//server.on('request', require('./request'));
//
//server.listen(1990);
//
//log.debug('Server is running');



var server = http.createServer();
var url = require('url');
server.on('request', function(req, res) {
  var urlParsed = url.parse(req.url, true);
  //debugger;

  WTF();

  if(req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message) {
    res.end(urlParsed.query.message);
    return;
  }

  res.statusCode = 404;
  res.end('Not found');
});


server.listen(1990);
console.log('Server is running');