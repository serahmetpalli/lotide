const assertEqual = function(actual, expected) {
  if ((actual) === (expected)) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};
//The function countLetters should take it a sentence(as a string) and then return a count of each of the letters in that sentence. 

const countLetters=function(sentence){
  const results={};
  for (let letter of sentence){
//if letter of the sentence is not a space, then output it to new object results.
    // if (letter!==" ") {
    //   if (results[letter]){
    //     results[letter]=results[letter]+1;
    //   } else {
    //     results[letter]=1;
    //   }
    // }
    if (letter===" "){
      continue;
    } else if (results[letter]){
      results[letter]=results[letter]+1;
    } else {
      results[letter]=1;
    }
  }
  return results;
}

//return results indicating the occurence of every letter. if lhl is the string, then {l:2, h:1}

console.log(countLetters("lighthouse in the house"));