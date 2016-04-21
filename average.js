module.exports = function(rage){
  var total = 0;
  rage.forEach(function(cado){
    total+= cado;

  });
  var averageDeal = total/rage.length;

console.log(averageDeal);
  return averageDeal;
}
