var phrases;
exports.connect = function() {
  phrases = require('./ru');
};

exports.getPhrases = function(name) {
  if(!phrases[name]) {
    throw new Error('��� ����� �����: ' + name)
  }
  return phrases[name];
};