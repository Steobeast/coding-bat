/*

We'll say that a number is "teen" if it is in the range 13..19 inclusive.
Given 3 int values, return true if 1 or more of them are teen.


hasTeen(13, 20, 10) → true
hasTeen(20, 19, 10) → true
hasTeen(20, 10, 13) → true
*/

import { assert } from "chai";
import { hasTeen } from "../src";

describe("hasTeen", () => {
  it("Should return true if 1 of the values is within range", () => {
    const result = hasTeen(13, 20, 10);
    assert.equal(result, true);
  });
  
  it("Should return true if 2 of the values are within range", () => {
    const result = hasTeen(13, 14, 10);
    assert.equal(result, true);
  });

  it("Should return false if no values are within range", () => {
    const result = hasTeen(12, 20, 10);
    assert.equal(result, false);
  });
});
