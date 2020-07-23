// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
//   } else {
//     console.log(`🔴🔴🔴 Assertion Failed: ${[actual]} !== ${[expected]}`);
//   }
// };

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

//Map function will take in two arguments - array to map, callback function. It will then return a new array based on the results of the callback function. 

const words = ["ground", "control","to","major","tom"];
// const lists = ['cat','bat','rat'];
const map= function (array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1= map(words,word => word[0]);
console.log(results1);

//TEST CODE - add assertEqual and eqArrays functions too. 
// console.log(map(words, word => word[0]));
// const result2 = map(lists, list => list);

assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);