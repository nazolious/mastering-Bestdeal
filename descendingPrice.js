module.exports = function(fruittee){
  var appTree = [];
  for(var key in fruittee){

    if(fruittee[key].hasOwnProperty('apples')){
    appTree.push({
      shop: key,
      price: fruittee[key].apples
    });
  }

  var byApples = appTree.slice(0);
  //console.log(byApples);
  byApples.sort(function(b,a){
  return a.price - b.price
  });
  }
  console.log(byApples);

  return byApples;
  }
