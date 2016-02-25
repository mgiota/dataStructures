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
      console.log(actual)
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