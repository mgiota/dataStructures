exports = module.exports = {};

exports.isString = function(input) {
  return toString.call(input) === '[object String]';
};

exports.isBlank = function(input) {
  return input.length === 0;
};

exports.stringToArray = function(str) {
  return str.trim().split(' ');
};

exports.truncate = function(str, len) {
  if((str.constructor === String) && (len > 0)) {
    return str.slice(0, len);
  }
  return str;
};
