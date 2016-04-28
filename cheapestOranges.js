module.exports = function(fruitMin){

var min = 1000;
  var cheapestShop = "";
  for(var key in fruitMin){
    var treeOrange = fruitMin[key];
    if (treeOrange.oranges < min){
      min = treeOrange.oranges;
      cheapestShop = key;
    }
  }
  console.log(cheapestShop);
  return cheapestShop;
}
  //   cheapestShop.push({
  //     shops: key,
  //     price: fruitMin[key].oranges
  //   });
  //   }
  //
  //
  // console.log(cheapestShop);
