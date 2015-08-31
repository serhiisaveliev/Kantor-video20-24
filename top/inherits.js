var util = require('util');

// Parent
function Animal(name) {
  this.name = name;
}

Animal.prototype.woof = function() {
  console.log(this.name + ' said woof')
};

function Rabbit(name) {
  this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function() {
  console.log(this.name + ' is jumping');
};

var rabbit = new Rabbit('Bunny');
rabbit.woof();
rabbit.jump();
