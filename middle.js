const eqArrays = function (actual,expected){
  if (expected.length === actual.length){  
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

//Implement middle function

let middle = function(orgArray){
  
  //it should take in an array and return the middle most elements of the given array
  //the middle function should return only the middle element(s) of the array which will have varying length. 
    
      if ((orgArray.length===1) || (orgArray.length===2)){
        return [];
      } else if (orgArray.length % 2 === 0){
        const secondIndex = Math.floor(orgArray.length/2);
        const firstIndex = secondIndex - 1;
        return [orgArray[firstIndex],orgArray[secondIndex]];
      } else {
        const midIndex = Math.floor(orgArray.length/2);
        // console.log[orgArray[midIndex]];
        return [orgArray[midIndex]];
      }
    }

//use the assertArraysEqual to test our new function

//TEST CODE
assertArraysEqual((middle([1])),[]); // => []
assertArraysEqual((middle([1, 2])),[]); // => []

assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3, 4]