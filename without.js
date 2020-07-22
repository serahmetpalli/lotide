const eqArrays = function (actual,expected){
  if (expected.length===actual.length){  
    for (i=0; i<actual.length; i++){
      if (actual[i] !== expected[i]) {
        return false;
      } 
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual= function (actual,expected){
 if (eqArrays(actual, expected)){
   console.log("true");
 } else {
   console.log("false");
 }
}


const without = function(source,itemsToRemove){
  let newArr=source;
  for (let i=0; i<newArr.length; i++) {
    for (let j=0; j<itemsToRemove.length; j++) {
      if (newArr[i] === itemsToRemove[j]) {
      newArr.splice(i,1);
      }
    }
  }
    return newArr;
  };

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

