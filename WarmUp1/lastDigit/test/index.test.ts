/*
Given two non-negative int values, return true if they have the same last digit, 
such as with 27 and 57. Note that the % "mod" operator computes remainders, so 17 % 10 is 7.


lastDigit(7, 17) → true
lastDigit(6, 17) → false
lastDigit(3, 113) → true
*/

import { assert } from "chai";
import { lastDigit } from "../src";

describe("lastDigit()", () => {

  it("Should return true if the last digit in each int are the same", () => {
    const result = lastDigit(7, 17);
    assert.equal(result, true);
  });

  it("Should return false if the last digit in each int are differnt", () => {
    const result = lastDigit(6, 17);
    assert.deepEqual(result, false);
  });
  
  it("Should return true if the last digit in each int are the same", () => {
    const result = lastDigit(3, 113);
    assert.equal(result, true);
  });
    
  it("Should return true if the last digit in each int are the same with two values in the 100's", () => {
    const result = lastDigit(263, 113);
    assert.equal(result, true);
  });
  
  it("Should return true if the last digit in each are the same with 2 values in the 1000's", () => {
    const result = lastDigit(785463, 253513);
    assert.equal(result, true);
  });
});
