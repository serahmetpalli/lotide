function reverseStr(str) {
  var newStr = '';

  for (i=str.length-1; i >= 0; i--) {
	newStr+=str[i];
  }
  return newStr;
}

console.log(reverseStr(process.argv[2]));