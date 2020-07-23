const assertEqual = function(actual, expected) {
  if ((actual) === (expected)) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

//implement the function findKeyByValue which takes in an object and a value. it should scan the object, then return the first KEY which has a given VALUE. if theres NO KEY with that GIVEN VALUE, then it should return UNDEFINED.

const findKeyByValue = function(object,value){
  //IF KEY WITH VALUE IS PRESENT, THEN OUTPUT THE KEY - SCI_FI/DRAMA/COMEDY.
  const key = "undefined"; 
  // console.log(object);
  for (const property in object) {
    if (object[property] === value){
      return property; 
    }  
  } 
  return undefined;
}
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);

