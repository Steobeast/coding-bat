/**
 
We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 2 int values, 
return true if one or the other is teen, but not both.


loneTeen(13, 99) → true
loneTeen(21, 19) → true
loneTeen(13, 13) → false
 */

import { assert } from "chai";
import { loneTeen } from "../src";

describe("loneTeen", () => {
  it("Should return true if only one number falls within range", () => {
    const result = loneTeen(13, 99);
    assert.equal(result, true);
  });

  it("Should return true if only the other number falls within range", () => {
    const result = loneTeen(99, 13);
    assert.equal(result, true);
  });

  it("Should return false if both numbers fall within range", () => {
    const result = loneTeen(13, 13);
    assert.equal(result, false);
  });
  
  it("Should return false if both numbers are out of range", () => {
    const result = loneTeen(27, 8);
    assert.equal(result, false);
  });

  it("Should return false if a negative number is given", () => {
    const result = loneTeen(-19, 0);
    assert.equal(result, false);
  });
});
