const assert = require('chai').assert;
const tail = require('../tail');
const result = ["Hello", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns 2 for [Hello, Lighthouse, Labs].length", () => {
    assert.strictEqual(tail(result).length, 2);
  });

  it("returns Lighthouse for [0]", () => {
    assert.strictEqual(tail(result)[0],"Lighthouse"); 
  });

  it("returns Labs for [1]", () => {
    assert.strictEqual(tail(result)[1],"Labs"); 
  });
});


