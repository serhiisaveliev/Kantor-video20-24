var db = require('db');
var log = require('logger')(module);
db.connect();

var User = require('./user');

function run() {
  var petya = new User('Petya');
  var vasya = new User('Вася');

  vasya.hello(petya);

  log(db.getPhrases('Run successful'));
}

if(module.parent) {
  exports.run = run;
} else {
  run();
}