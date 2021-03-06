var expect = require('chai').expect;
var strings = require('../Strings.js');

function areEquals(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }

  for(var i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
describe('isString', function() {
  it('should return if input is string or not', function() {
    expect(strings.isString("hello")).to.equal(true);
    expect(strings.isString(1)).to.equal(false);
    expect(strings.isString([1, 2, 3])).to.equal(false);
  });
});

describe('isBlank', function() {
  it('should return if a string is blank', function() {
    expect(strings.isBlank("hello")).to.equal(false);
    expect(strings.isString("")).to.equal(true);
  });
});

describe('stringToArray', function() {
  it('should convert a string into an array of words', function() {
    var actual = strings.stringToArray("Hello World"),
        expected = ["Hello", "World"];
    expect(areEquals(actual, expected)).to.equal(true);
  });
});

describe('truncate', function() {
  it('should remove specified number of characters from a string', function() {
    expect(strings.truncate("Hello World", 5)).to.equal("Hello");
  });
});

describe('abbrevName', function() {
  it('should return abbreviated name', function() {
    expect(strings.abbrevName("Martin Mueller")).to.equal('Martin M.');
  });
});

describe('capitalize', function() {
  it('should capitalize a string', function() {
    expect(strings.capitalize("martin")).to.equal('Martin');
  });
});

describe('capitalizeWords', function() {
  it('should capitalize a string', function() {
    expect(strings.capitalizeWords("js string exercises")).to.equal('Js String Exercises');
  });
});