var http = require('http');

var server = http.createServer(function(req, res) {

  var part = 0;
  setImmediate(function run() {
    heavyCalc(part++);
    if (notFinished) setImmediate(run);
  });

  //process.nextTick(function() {
  //  req.on('readable', function() {
  //    //должен сработать на ближайших данных
  //  })
  //});

  //setTimeout(function() {
  //  // сработает до следующего запроса или после!
  //}, 0);

}).listen(1337);