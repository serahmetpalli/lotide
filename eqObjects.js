const assertEqual = function(actual, expected) {
  if ((actual) === (expected)) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const eqArrays = function(actual,expected) {
  // console.log(actual,expected);
  // console.log("Testing eqArrays: ")
  if (expected.length !== actual.length) {
    // console.log("Array lengths are different --> False");
    return false;
  }
  
  for (let i = 0; i < actual.length; i ++) {
    if (actual[i] !== expected[i]) {
      // console.log("Values are different --> False");
      return false;
    }
  }

  return true;
};


//implement a function eqObjects which takes two objects and returns true or false, if they have identical keys and identical values

const eqObjects = function(object1, object2) {
  //length of object1 is equal to length of object2, true if it matches, false if it doesn't
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);


  if (keys1.length !== keys2.length) {
    // console.log("Keys lengths are different --> False");
    return false;
  }

  for (let key of keys1) {
    // console.log(object1[key]);
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
      // console.log("Arrays are different --> False");
        return false;
      }
    }

    else if (object1[key] !== object2[key]) {
      // console.log("Object value is different --> False" , object1[key],object2[key] );
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log((eqObjects(ab, ba))); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log((eqObjects(ab, abc))); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
