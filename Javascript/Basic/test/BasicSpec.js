var expect = require('chai').expect;
var basic = require("../Basic.js");

describe('currentDay', function() {
  it('should display current day', function() {
    console.log(basic.currentDay());
  });
});

describe('currentDate', function() {
  it('should display current date in this format dd-mm-yyyy', function() {
    console.log(basic.currentDate());
  });
});