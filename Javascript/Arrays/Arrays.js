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
};

function swap(arr, firstIndex, secondIndex) {
  var temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

function indexOfMinimum(arr, startIndex) {
  var minIndex = startIndex,
      minValue = arr[startIndex];

  for(var i=startIndex + 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
      minIndex = i;
    }
  }

  return minIndex; 
}

exports.selectionSort = function(arr) {
  var minIndex;
  for(var i = 0; i < arr.length; i++) {
    minIndex = indexOfMinimum(arr, i);
    swap(arr, i, minIndex);
  }
  return arr;
};

exports.findMostFrequentItem = function(arr) {
  var frequencies = {};
  for(var i = 0; i < arr.length; i++) {
    if(frequencies[arr[i]] === undefined) {
      frequencies[arr[i]] = 1;
    } else {
      frequencies[arr[i]] += 1
    }
  }

  var maxFreq = 0,
      maxItem;
  for(var i in frequencies) {
    if(frequencies[i] > maxFreq) {
      maxFreq = frequencies[i];
      maxItem = i;
    }
  }

  return maxItem;
};

exports.swapCase = function(text) {
  var result = '';
  for(var i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      result+= text[i].toLowerCase();
    } else {
      result+= text[i].toUpperCase();
    }
  }
  return result;
};

exports.printArray = function(arr) {
  for(var i = 0; i < arr.length; i++) {
    var row = arr[i];
    console.log("Row " + i + '\n');
    for(var j = 0; j < row.length; j++) {
      console.log(row[j] + '\n');
    }
  }
};

exports.sumSquares = function(arr) {
  var sum = 0;
  for(var i=0; i < arr.length; i++) {
    sum+= Math.pow(arr[i], 2);
  }
  return sum;
};
