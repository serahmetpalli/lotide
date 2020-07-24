const assertArraysEqual= function (actual,expected){
  if (eqArrays(actual, expected)){
    console.log("true");
  } else {
    console.log("false");
  }
 }

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
}

// takeUntil will take in 2 parameters - array to workwith, callback-lodash calls "predicate"


const takeUntil = function(array, callback) {
  const result=[];
  for (const item of array) {
    if (!callback(item)){  
     result.push(item)   
    } else {
      break;    
  }
}
return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
(console.log(results2));


assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
console.log(eqArrays(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]));
console.log(eqArrays(results1, [ 1, 2, 5, 7, 2 ]));

//this function will return a slice of the array with elements taken from the beginning. it should keep going until the callback/predicate returns a truthy value.

// EXPECTED OUTPUT
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]