module.exports = function(obj){

var appleTree = [];
for(var key in obj){

  if(obj[key].hasOwnProperty('apples')){
  appleTree.push({
    shop: key,
    price: obj[key].apples
  });
}

var byApples = appleTree.slice(0);
//console.log(byApples);
byApples.sort(function(a,b){
return a.price - b.price
});
}
console.log(byApples);

return byApples;
}
