module.exports = function(perPrice){
  var priceAvos = [];

perPrice.forEach(function(convert){
var price = convert[1];
var quantity = convert[0];

priceAvos.push(Number((price/quantity).toFixed(2)));

});
console.log(priceAvos);
return priceAvos;
}
