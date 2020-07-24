const assertEqual = function(actual, expected) {
  if ((actual) === (expected)) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

//implement the function findKey which takes in an object and a callback.
//it should scan the object and return the first key for which the callback returns a truthy value
//if no key is found, it should return undefined.

const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
};

//EXAMPLE
const result = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

assertEqual(result,"noma");