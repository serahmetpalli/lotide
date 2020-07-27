const assertEqual = require('../assertEqual');
const tail = require('../tail');
const result = ["Hello", "Lighthouse", "Labs"];

assertEqual(tail(result).length, 2); // ensure we get back two elements
assertEqual(tail(result)[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(tail(result)[1], "Labs"); // ensure second element is "Labs"


