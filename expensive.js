module.exports = function(most){

var max = 2.9;
most.forEach(function(avocado){
  if (avocado > max) {
max = avocado;
  }
});
console.log(max);
return max;
}
