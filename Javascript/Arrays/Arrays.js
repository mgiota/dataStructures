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
