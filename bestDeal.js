module.exports = function(convert){

var newArray = [];

var newStrings = convert.split(",");
console.log(newStrings);

// looping through my array
newStrings.forEach(function(string) {
  // remove for R and pushing newArray
newArray.push(string.split("for R"));

});
console.log(newArray);
return newArray;
}
