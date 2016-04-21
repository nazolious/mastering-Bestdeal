var bestDeal = require('../bestDeal');
var perAvo = require('../perAvo');
var cheapest = require('../cheapest');
var assert = require('assert');

describe('string to array',function(){
  it('convert the string into an array (split out the quantity and the price)',function(){

var string = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
    var str = bestDeal(string);
    assert.deepEqual(str,[["1 ","3"],[" 2 ","7"],[" 3 ","10"],[" 5 ","14.50"]]);
  });
});

describe('price per avo',function(){
  it('calculate the price per avo',function(){

var strings = [["1 ","3"],[" 2 ","7"],[" 3 ","10"],[" 5 ","14.50"]];
    var str = perAvo(strings)
    assert.deepEqual(str,[3, 3.5, 3.33, 2.9]);
  });
});

describe('cheapest deal',function(){
  it('find the cheapest deal',function(){

var deal = [3, 3.5, 3.33, 2.9];
var str = cheapest(deal);
assert.equal(str,2.9);

  });
});
