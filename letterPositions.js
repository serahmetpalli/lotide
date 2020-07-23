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

//implement a function called letterPositions which will return all the indices (zero-based positions) in the string where each character is found. 
//how to return the index in string - 
const letterPositions = function(sentence) {
  const results = {};
  for (i=0; i<sentence.length; i++){
    const letter = sentence[i];
    if (letter !== " "){
        if (letter in results){
        results[letter].push(i);
      } else {
        results[letter]=[i];
      //lines 31-34 change to ternary
    }
    }
  }
  return results;
}

// If we put in "LHL", the output should be something like {L:[0,2],H:[1]}

//TEST CODE
// letterPositions("hello");
assertArraysEqual(letterPositions("lighthouse in the house").g,[2]);

