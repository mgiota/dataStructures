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

exports.sum = function(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

exports.product = function(arr) {
  var product = 1;
  for(var i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

exports.removeDuplicates = function(arr) {
  var uniqueArr = arr.filter(function(elem, index) {
    return arr.indexOf(elem) === index;
  });

  return uniqueArr;
};

exports.removeDuplicates2 = function(arr) {
  var len = arr.length,
      tail = 1,
      j;
  for(var i = 1; i < len; i++) {
    for(j = 0; j < tail; j++) {
      if(arr[i] === arr[j]) {
        break;
      }
    }

    if(j === tail) {
      arr[tail] = arr[i];
      tail++;
    }
  }

  return arr.slice(0, tail);
};

exports.removeDuplicates3 = function(arr) {
  var result = [],
      obj = {};

  for(var i = 0; i < arr.length; i++) {
    obj[arr[i]] = 0;
  }

  for(var i in obj) {
    result.push(i);
  }

  return result;
};

exports.ordinalNumbers = function(arr) {
    function Ordinal(n) {
      var o = ['th', 'st', 'nd', 'rd'];
      return n + (o[(n%10)] || o[0]);
    }

    for(var i = 0; i < arr.length; i++) {
      var ordinal = i + 1;
      console.log(Ordinal(ordinal) + " choice is " + arr[i] + ".");
    }
};

// Fisher-Yates (Knuth) Shuffle
exports.shuffle = function(arr) {
  function swap(arr, firstIndex, secondIndex) {
    var temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
  }

  var currIndex = arr.length,
      randomIndex;

  while(currIndex > 0) {
    randomIndex = Math.floor(Math.random()*currIndex);
    currIndex--;
    swap(arr, currIndex, randomIndex);
  }

  return arr;
};


/*
* Earth rotates about 365.242375 times a year
*/
exports.isLeapYear = function(year) {
  if (year % 4 !== 0) {
    return false;
  } else {
    if(year % 100 !== 0) {
      return true;
    } else {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};

exports.leapYearRange = function(start, end) {
  var yearRange = [],
      leapYears = [];
  for(var i = start; i <= end; i++) {
    yearRange.push(i);
  }

  yearRange.forEach(function(year) {
    if(exports.isLeapYear(year)) {
      leapYears.push(year);
    }
  });

  return leapYears;
};

exports.binarySearch = function(arr, n) {
  var start = 0,
      end = arr.length - 1,
      middle;

  while(start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === n) {
      return middle;
    } else if (arr[middle] > n) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return false;
};

exports.sumOfArrays = function(arr1, arr2) {
  var len1 = arr1.length,
      len2 = arr2.length,
      maxLen = Math.max(len1, len2),
      minLen = Math.min(len1, len2),
      sum = [],
      maxArr;
  if(len1 < len2) {
    maxArr = arr2;
  } else {
    maxArr = arr1;
  }
  for(var i = 0; i < maxLen; i++) {
    if(i < minLen) {
      sum.push(arr1[i] + arr2[i]);
    } else {
      sum.push(maxArr[i]);
    }
  }

  return sum;
};

exports.sumOfArrays2 = function(arr1, arr2) {
  var len1 = arr1.length,
      len2 = arr2.length,
      maxLen = Math.max(len1, len2),
      sum = [];

  for(var i = 0; i < maxLen; i++) {
    if(typeof arr1[i] === 'undefined') {
      arr1[i] = 0;
    } else if(typeof arr2[i] === 'undefined') {
      arr2[i] = 0;
    }

    sum.push(arr1[i] + arr2[i]);
  }

  return sum;
};

exports.findDuplicates = function(arr) {
  var duplicates = arr.filter(function(elem, pos){
    return arr.indexOf(elem) !== pos
  });

  return duplicates;
};

exports.flattenNestedArr = function(arr, shallow, res) {
  if (! res) {
    res = [];
  }

  if(shallow) {
    return res.concat.apply(res, arr);
  }

  for(var i = 0; i < arr.length; i++) {
    if(toString.call(arr[i]) === '[object Array]') {
      exports.flattenNestedArr(arr[i], shallow, res);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

exports.findMaxOfArray = function(arr) {
  return Math.max.apply(null, arr);
};

//http://www.2ality.com/2012/07/apply-tricks.html
exports.fillHoles = function() {
  function returnArgs() {
    return Array.prototype.slice.call(arguments);
  }

  return returnArgs.apply(null, [1,,2]);
};

exports.union = function(arr1, arr2) {
  var union = arr1.concat(arr2);

  return exports.removeDuplicates(union);
};

exports.union2 = function(arr1, arr2) {
  if((arr1 === null) || (arr2 === null)) {
    return void 0;
  }

  var obj = {},
      res = [],
      i;

  for(i=0; i < arr1.length; i++) {
    obj[arr1[i]] = arr1[i]; 
  }

  for(i=0; i < arr2.length; i++) {
    obj[arr2[i]] = arr2[i];
  }

  for(i in obj) {
    res.push(obj[i]);
  }
  return res;
};

exports.difference = function(arr1, arr2) {
  var a = [],
      diff = [];

  for(var i = 0; i < arr1.length; i++) {
    a[arr1[i]] = true;
  }

  for(var i = 0; i < arr2.length; i++) {
    if(a[arr2[i]]) {
      delete a[arr2[i]];
    } else {
      a[arr2[i]] = true;
    }
  }

  for(var k in a) {
    diff.push(parseInt(k, 10));
  }

  return diff;
};

exports.difference2 = function(arr1, arr2) {
  return arr1.filter(function(elem) {
    return arr2.indexOf(elem) < 0;
  });
};

exports.removeFalsyValues = function(arr) {
  var res = [];

  for(var i = 0; i < arr.length; i++) {
    var value = arr[i];
    if(value) {
      res.push(value);
    }
  }

  return res;
};

exports.sortArrayOfObjects = function(arr) {
  /*
  * ascending order
  **/
  function byTitle(a, b) {
    if (a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    
    return 0;
  }

  return arr.sort(byTitle);
};

exports.propertyValue = function(arr, prop) {
  var res = [];

  for(var i=0; i < arr.length; i++) {
    if(arr[i].hasOwnProperty(prop)) {
      res.push(arr[i][prop]);
    }
  }

  return res;
};

exports.complementaryPairs = function(arr, sum) {
  var obj = {},
      count = 0;
  for(var i = 0; i < arr.length; i++) {
    if(obj[arr[i]] in obj) {
      obj[arr[i]] += 1;   
    } else {
      obj[arr[i]] = 1;
    }
  }

  for(var i = 0; i < arr.length; i++) {
    var toCheck = sum - arr[i];
    if(toCheck in obj) {
      count+= obj[toCheck];
    }
  }

  return count;
};

exports.longestCommonSubstring = function(arr) {
  var arr1 = arr.concat().sort(),
      a1 = arr1[0],
      L = a1.length,
      a2 = arr1[arr1.length - 1],
      i = 0;

  while (i < L && a1.charAt(i) === a2.charAt(i)) i++;

  return a1.substring(0, i); 
};

exports.generateArray = function(s, e) {
  var res = [],
      index = 0;
  for(var i = s; i <= e; i++) {
    res[index] = i;
    index++;
  }

  return res;
};

exports.generateArray2 = function(start, end) {
  var arr = new Array(end - start + 1);

  for(var i = 0; i < arr.length; i++, start++) {
    arr[i] = start;
  }

  return arr;
};

exports.arrayRange = function(start, len) {
  var arr = new Array(len);
  for(var i = 0; i < len; i++, start++) {
    arr[i] = start;
  }

  return arr;
};

exports.move = function(arr, pos1, pos2) {
  var elem = arr[pos1],
      res = [];

  for(var i = 0; i < pos1; i++) {
    res.push(arr[i]);
  }

  for(var i = pos1 + 1; i <= pos2; i++) {
    res.push(arr[i]);
  }

  res.push(elem);

  for(var i = pos2 + 1; i < arr.length; i++) {
    res.push(arr[i]);
  }

  return res;
};

exports.move2 = function(arr, pos1, pos2) {
  arr.splice(pos2, 0, arr.splice(pos1, 1)[0]);
  return arr;
};

exports.prefillStringArray = function(n, val) {
  return Array.apply(null, Array(n)).map(String.prototype.valueOf, val);
};
