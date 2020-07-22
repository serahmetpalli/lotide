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

assertArraysEqual([0,1,2],[1,2,3]);
assertArraysEqual([0,1,2],[0,1,2]);
