// Демо простейшего применения ЕЕ
// аргументы передаются по цепочке
// обработчики срабатывают в том же порядке, в котором назначены

var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('error', function() {

});

server.emit('error');

//server.on('request', function(request) {
//  request.approved = true;
//});
//
//server.on('request', function(request) {
//  console.log(request);
//});
//
//server.emit('request', {from: 'Client'});
//
//server.emit('request', {from: 'One more client'});
