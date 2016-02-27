var expect = require('chai').expect;
var arrays = require('../Arrays.js');

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for(var i = arr1.length; i > 0; i--) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

describe('is_array', function() {
  it('#should return true if input is an array', function() {
    var input = [1, 2, 3];
    var result = arrays.is_array(input);
    expect(result).to.equal(true);
  });

  it('#should return false if input is not an array', function() {
    var input = 'test';
    var result = arrays.is_array(input);
    expect(result).to.equal(false);
  });
});

describe('clone', function() {
  it('should clone an array', function() {
    var arr = [1, 2, 3];

    var clone = arrays.clone(arr);

    expect(clone.length).to.equal(3);
    expect(clone[0]).to.equal(1);
    
  });
});

describe('getFirstNElements', function() {
  it('should return 1st element if no n parameter is passed', function() {
    var arr = [1, 2, 3];
    expect(arrays.getFirstNElements(arr)).to.equal(1);
  });

  it('should return empty array if we pass an empty array', function() {
    var arr1 = [];
    var arr2 = arrays.getFirstNElements(arr1, 3);
    var result = arraysEqual(arr1, arr2);
    expect(result).to.equal(true);
  });

  it('should return first n elements', function() {
    var arr1 = [7, 9, 0, -2],
        expected = [7, 9, 0],
        actual = arrays.getFirstNElements(arr1, 3),
        result = arraysEqual(expected, actual);

    expect(result).to.equal(true);
  });

  it('should return array if n parameter bigger than array length', function() {
    var arr1 = [7, 9, 0, -2],
        expected = arr1,
        actual = arrays.getFirstNElements(arr1, 6),
        result = arraysEqual(expected, actual);

    expect(result).to.equal(true);
  });

  it('should return an empty array if a negative parameter is passed', function() {
    var arr1 = [7, 9, 0, -2],
        expected = [],
        actual = arrays.getFirstNElements(arr1, -3),
        result = arraysEqual(expected, actual);

    expect(result).to.equal(true);
  });
});

describe('getLastNElements', function() {
  it('should return last element if no n parameter is passed', function() {
    var arr = [7, 9, 0, -2];

    expect(arrays.getLastNElements(arr)).to.equal(-2);
  });

  it('should return last n elements', function() {
    var arr = [7, 9, 0, -2],
        expected = [9, 0, -2],
        actual = arrays.getLastNElements(arr, 3),
        result = arraysEqual(expected, actual);

    expect(result).to.equal(true);
  });

  it('should return whole array if n is bigger than array length', function() {
    var arr = [7, 9, 0, -2],
        expected = [7, 9, 0, -2],
        actual = arrays.getLastNElements(arr, 6),
        result = arraysEqual(expected, actual);

    expect(result).to.equal(true);   
  });
});

describe('joinArrayElemsToString', function() {
  it('should join array elems into string using default comma', function() {
    var arr = ["apple", "banana", "orange"],
        expected = "apple,banana,orange",
        actual = arrays.joinArrayElemsToString(arr);

    expect(actual).to.equal(expected);
  });

  it('should join array elems into string using custom symbol', function() {
    var arr = ["apple", "banana", "orange"],
        expected = "apple+banana+orange",
        actual = arrays.joinArrayElemsToString(arr, '+');

    expect(actual).to.equal(expected);
  });
});

describe('insertDashes', function() {
  it('should insert a dash between each character', function() {
    var input = '02468',
        expected = '0-2-4-6-8',
        actual = arrays.insertDashes(input);

    expect(actual).to.equal(expected);
  });

  it('should insert a dash between even characters', function() {
    var input = '025468',
        expected = '0-254-6-8',
        actual = arrays.insertDashes(input);

    expect(actual).to.equal(expected);
  });
});

describe('sort', function() {
  var arr = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ],
      expected = [ -4, -3, 1, 2, 3, 5, 6, 7, 8],
      actual = arrays.sort(arr),
      result = arraysEqual(expected, actual);
      //console.log(actual)
  expect(result).to.equal(true);
});

describe('selectionSort', function() {
  it('should sort array using selectionSort', function() {
    var arr = [32, 4, 5, 1, 2, 6, 3, 11],
        expected = [1, 2, 3, 4, 5, 6, 11, 32],
        actual = arrays.selectionSort(arr),
        result = arraysEqual(expected, actual);
    expect(result).to.equal(true);
  });
});

describe('findMostFrequentItem', function() {
  it('should find most frequent item of an array', function() {
    var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    //console.log(arrays.findMostFrequentItem(arr))
    expect(arrays.findMostFrequentItem(arr)).to.equal('a');
  });
});

describe('swapCase', function() {
  it('should swap case of each character', function() {
    var text = "This Is A SenTense"
        expected = "tHIS iS a sENtENSE",
        actual = arrays.swapCase(text);

    expect(actual).to.equal(expected);
  });
});

describe('printArray', function() {
  it('should print nested array', function() {
    var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    arrays.printArray(a);
  });
});

describe('sumSquares', function() {
  it('should sum the squares of an array', function() {
    var a = [0, 1, 2, 3, 4];

    expect(arrays.sumSquares(a)).to.equal(30);
  });
});

describe('sum', function() {
  it('should return the sum of the array', function() {
    var arr = [1, 2, 3, 4, 5, 6];
    
    expect(arrays.sum(arr)).to.equal(21);
  });
});

describe('product', function() {
  it('should return the product of the array', function() {
    var arr = [1, 2, 3, 4, 5, 6];
    
    expect(arrays.product(arr)).to.equal(720);
  });
});

describe('removeDuplicates', function() {
  it('should remove duplicates from array', function() {
    var arr = [2, 3, 4, 5, 3, 3, 2, 1, 9, 4, 4, 5];
    var uniqueArr = arrays.removeDuplicates(arr);
    //console.log(uniqueArr);
    expect(uniqueArr.length).to.equal(6);
  });
});

describe('removeDuplicates2', function() {
  it('should remove duplicates from an array in place', function() {
    var arr = [2, 3, 2, 4, 6, 4, 3, 2, 2, 1],
      actual = arrays.removeDuplicates2(arr),
      expected = [2, 3, 4, 6, 1],
      result = arraysEqual(actual, expected);
  
    expect(result).to.equal(true);
  });
});

describe('removeDuplicates3', function() {
  it('should remove duplicates from array #3', function() {
    var arr = [2, 3, 2, 4, 6, 4, 3, 2, 2, 1],
      actual = arrays.removeDuplicates3(arr);
  
    expect(actual.length).to.equal(5);
  });
});

describe('ordinalNumbers', function() {
  it('should console array using ordinal numbers', function() {
    var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];  

    arrays.ordinalNumbers(color);
  });
});

describe('shuffle', function() {
  it('should shuffle an array', function() {
    var arr = [1, 2, 3, 4, 5, 6, 7];
    var shuffled = arrays.shuffle(arr);
    console.log(shuffled);
  });
});

describe('isLeapYear', function() {
  it('should return if a year is leap year or not', function() {
    expect(arrays.isLeapYear(1997)).to.equal(false);
    expect(arrays.isLeapYear(2012)).to.equal(true);
    expect(arrays.isLeapYear(2000)).to.equal(true);
    expect(arrays.isLeapYear(2100)).to.equal(false);
  });
});

describe('leapYearRange', function() {
  it('should return leap years within a year range', function() {
    var expected = [2000, 2004, 2008, 2012],
        actual = arrays.leapYearRange(2000, 2012);
    
    expect(arraysEqual(expected, actual)).to.equal(true);
  }); 
});

describe('binarySearch', function() {
  it('should find the position of a specified input value within an array sorted by key value', function() {
    var arr = [1, 2, 3, 4, 5, 7, 8, 9];

    expect(arrays.binarySearch(arr, 4)).to.equal(3);
    expect(arrays.binarySearch(arr, 1)).to.equal(0);
    expect(arrays.binarySearch(arr, 9)).to.equal(7);
    expect(arrays.binarySearch(arr, 5)).to.equal(4);


  });
});

describe('sumOfArrays', function() {
  it('should compute the sum of equal size arrays', function() {
    var arr1 = [1, 0, 2, 3, 4],
        arr2 = [3, 5, 6, 7, 8],
        expected = [4, 5, 8, 10, 12],
        actual = arrays.sumOfArrays(arr1, arr2);

    expect(arraysEqual(actual, expected)).to.equal(true);
  });

  it('should compute the sum of unequal size arrays', function() {
    var arr1 = [1, 0, 2, 3, 4],
        arr2 = [3, 5, 6, 7, 8, 13],
        expected = [4, 5, 8, 10, 12, 13],
        actual = arrays.sumOfArrays(arr1, arr2);
    console.log(actual);
    expect(arraysEqual(expected, actual)).to.equal(true);
  });

  it('should compute the sum of unequal size arrays', function() {
    var arr1 = [1, 0, 2, 3, 4, 12, 3, 4, 5],
        arr2 = [3, 5, 6, 7, 8],
        expected = [4, 5, 8, 10, 12, 12, 3, 4, 5],
        actual = arrays.sumOfArrays(arr1, arr2);
    expect(arraysEqual(expected, actual)).to.equal(true);
  });
});

describe('sumOfArrays2', function() {
  it('should compute the sum of equal size arrays', function() {
    var arr1 = [1, 0, 2, 3, 4],
        arr2 = [3, 5, 6, 7, 8],
        expected = [4, 5, 8, 10, 12],
        actual = arrays.sumOfArrays2(arr1, arr2);

    expect(arraysEqual(actual, expected)).to.equal(true);
  });

  it('should compute the sum of unequal size arrays', function() {
    var arr1 = [1, 0, 2, 3, 4],
        arr2 = [3, 5, 6, 7, 8, 13],
        expected = [4, 5, 8, 10, 12, 13],
        actual = arrays.sumOfArrays2(arr1, arr2);
    console.log(actual);
    expect(arraysEqual(expected, actual)).to.equal(true);
  });

  it('should compute the sum of unequal size arrays', function() {
    var arr1 = [1, 0, 2, 3, 4, 12, 3, 4, 5],
        arr2 = [3, 5, 6, 7, 8],
        expected = [4, 5, 8, 10, 12, 12, 3, 4, 5],
        actual = arrays.sumOfArrays2(arr1, arr2);
    expect(arraysEqual(expected, actual)).to.equal(true);
  });
});

describe('findDuplicates', function() {
  it('should find duplicates in an array', function() {
    var arr = [1, 2, 5, 2, 3, 4, 5, 6, 1],
        actual = arrays.findDuplicates(arr),
        expected = [2, 5, 1];

    expect(arraysEqual(actual, expected)).to.equal(true);
  });
});

describe('flattenNestedArr', function() {
  it('should flatten a nested array without passing shallow', function() {
    var arr = [1, [2], [3, 4], [5, 6]],
        expected = [1, 2, 3, 4, 5, 6],
        actual = arrays.flattenNestedArr(arr);

    expect(arraysEqual(actual, expected)).to.equal(true);  
  });

  it('should flatten a single level if we pass shallow', function() {
     var arr = [1, [2], [3, [[4]]], [5, 6]],
        expected = [1, 2, 3, 4, 5, 6],
        actual = arrays.flattenNestedArr(arr, true);

    console.log(actual);
  });
});

describe('findMaxOfArray', function() {
  it('should return the max element of an array', function() {
    var arr = [-3, 2, 4, 1, 23, 434, 78];

    expect(arrays.findMaxOfArray(arr)).to.equal(434);
  });
});

describe('fillHoles', function() {
  it('should fillHoles', function() {
    console.log(arrays.fillHoles());
  });
});

describe('union', function() {
  it('should compute the union of 2 arrays', function() {
    var arr1 = [1, 2, 3],
        arr2 = [100, 2, 1, 10],
        union = arrays.union(arr1, arr2),
        expected = [1, 2, 3, 100, 10];

    expect(arraysEqual(union, expected)).to.equal(true);
  });
});

describe('union2', function() {
  it('should compute the union of 2 arrays', function() {
    var arr1 = [1, 2, 3],
        arr2 = [100, 2, 1, 10],
        union = arrays.union2(arr1, arr2),
        expected = [1, 2, 3, 10, 100];
    console.log(union);

    expect(arraysEqual(union, expected)).to.equal(true);
  });
});

describe('difference', function() {
  it('should compute the difference between 2 arrays', function() {
    var arr1 = [1, 2, 3, 8],
        arr2 = [12, 2, 1, 10],
        actual = arrays.difference(arr1, arr2),
        expected = [3, 8, 10, 12];
    expect(arraysEqual(actual, expected)).to.equal(true);
  });
});

describe('difference2', function() {
  it('should compute the difference between 2 arrays when 2nd array doesnt contain extra different elements', function() {
    var arr1 = [1, 2, 3, 8],
        arr2 = [2, 8],
        actual = arrays.difference2(arr1, arr2),
        expected = [1, 3];
    console.log(actual);
    expect(arraysEqual(actual, expected)).to.equal(true);
  });
});

describe('removeFalsyValues', function() {
  it('should remove falsy values from an array', function() {
    var arr = [NaN, 0, 15, false, -22, '',undefined, 47, null],
        actual = arrays.removeFalsyValues(arr),
        expected = [15, -22, 47];

    expect(arraysEqual(actual, expected)).to.equal(true);
  });
});

describe('sortArrayOfObjects', function() {
  it('should sort array of objects by title', function() {
    var library = [ 
      { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
      { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
      { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

    var sorted = arrays.sortArrayOfObjects(library);
    console.log(sorted);
  });
});

describe('propertyValue', function() {
  it('should retrieve the value of a given property from all elements in an array', function() {
    var library = [ 
     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games'}
    ];

    console.log(arrays.propertyValue(library, 'title'));
    console.log(arrays.propertyValue(library, 'libraryID'));
  });
});

describe('complementaryPairs', function() {
  it('should return number of K-complementary pairs in an array', function() {
    var arr = [1, 8, -3, 0, 1, 3, -2, 4, 5];
    console.log(arrays.complementaryPairs(arr, 6));

    expect(arrays.complementaryPairs(arr, 6)).to.equal(7);
  });
});

describe('longestCommonSubstring', function() {
  it('should return the longest common starting substring in a set of strings', function() {
    var arr = ['google', 'go'],
        actual = arrays.longestCommonSubstring(arr),
        expected = 'go';

    expect(actual).to.equal(expected);
  });
});

describe('generateArray', function() {
  it('should generate an array between 2 integers', function() {
    var actual = arrays.generateArray(4, 7),
        expected = [4, 5, 6, 7];

    expect(arraysEqual(actual, expected)).to.equal(true);
  });
});

describe('generateArray2', function() {
  it('should generate an array between 2 integers', function() {
    var actual = arrays.generateArray2(4, 7),
        expected = [4, 5, 6, 7];

    expect(arraysEqual(actual, expected)).to.equal(true);
  });
});

describe('arrayRange', function() {
  it('should generate an array of specified length', function() {
    var actual = arrays.arrayRange(4, 2),
        expected = [4, 5];

    expect(arraysEqual(actual, expected)).to.equal(true);
  });
});

describe('move', function() {
  it('should move an array element from one position to another', function() {
    console.log(arrays.move([10, 20, 30, 40, 50], 0, 2));
  });
});

describe('move2', function() {
  it('should move an array element from one position to another', function() {
    console.log(arrays.move2([10, 20, 30, 40, 50], 0, 2));
  });
});

describe('prefillStringArray', function() {
  it('should prefill array with default string value', function() {
    console.log(arrays.prefillStringArray(5, "test"));
  });
});

describe('prefillNumericArray', function() {
  it('should prefill array with default string value', function() {
    console.log(arrays.prefillNumericArray(5, 1));
  });
});

describe('arrayNumberRange', function() {
  it('should fill an array with numeric values on supplied bounds', function () {
    console.log(arrays.arrayNumberRange(0, 25, 5));
  });
});