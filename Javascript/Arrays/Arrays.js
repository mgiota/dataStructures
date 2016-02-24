exports = module.exports = {};

exports.is_array = function(arr) {
	return toString.call(arr) === '[object Array]';
};

exports.clone = function(arr) {
  return arr.slice(0);
};

exports.getFirstNElements = function(arr, n) {
  if (arr == null) {
    return void 0;
  }
  if (n == null) {
    return arr[0];
  }

  if (n < 0) {
    return [];
  }

  return arr.slice(0, n);
};

exports.getLastNElements = function(arr, n) {
  if (arr === null) {
    return void 0;
  }
  if(n === undefined) {
    return arr[arr.length - 1];
  }
  return arr.slice(Math.max(arr.length - n, 0));
};

exports.joinArrayElemsToString = function(arr, s) {
  //or arr.toString()
  return arr.join(s);   
};

exports.insertDashes = function(input) {
  var result = input[0];
  for(var i = 1; i < input.length; i++) {
    if(input[i] % 2 === 0 && input[i-1] % 2 === 0) {
      result+= '-';
    }
    result+= input[i];
  }

  return result;
};

exports.sort = function(arr) {
  function sortNumeric(a, b) {
    return a - b;
  }
  return arr.sort(sortNumeric);
}
