var http = require('http');

var server = http.createServer(function(req, res) {

  var part = 0;
  setImmediate(function run() {
    heavyCalc(part++);
    if (notFinished) setImmediate(run);
  });

  //process.nextTick(function() {
  //  req.on('readable', function() {
  //    //������ ��������� �� ��������� ������
  //  })
  //});

  //setTimeout(function() {
  //  // ��������� �� ���������� ������� ��� �����!
  //}, 0);

}).listen(1337);