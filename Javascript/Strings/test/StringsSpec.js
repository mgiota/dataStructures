var expect = require('chai').expect;
var strings = require('../Strings.js');

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