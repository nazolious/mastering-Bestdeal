module.exports = function(cheap){

  var min = 3.5;
  cheap.forEach(function(avo){
    if (avo < min) {
  min = avo;
    }
  });
  console.log(min);
  return min;
}
