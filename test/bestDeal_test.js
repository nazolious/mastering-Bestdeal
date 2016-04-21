var bestDeal = require('../bestDeal');
var assert = require('assert');

describe('string to array',function(){
  it('convert the string into an array (split out the quantity and the price)',function(){

var string = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
    var str = bestDeal(string);
    assert.deepEqual(str,[["1 ","3"],[" 2 ","7"],[" 3 ","10"],[" 5 ","14.50"]]);
  });
});
