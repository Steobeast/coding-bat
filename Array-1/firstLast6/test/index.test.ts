/**
 
Given an array of ints, return true if 6 appears as either the first or last element in the array. 
The array will be length 1 or more.

firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false
 */

import { assert } from "chai";
import { firstLast6 } from "../src";

describe("firstLast6", () => {
  it("Should return true if 6 is at the back of an array", () => {
    const result = firstLast6([1, 2, 6]);
    assert.deepEqual(result, true);
  });
  it("Should return true if 6 is at the front of an array", () => {
    const result = firstLast6([6, 1, 2, 3]);
    assert.deepEqual(result, true);
  });
  it("Should return false if 6 between the first or last digits of an array", () => {
    const result = firstLast6([13, 6, 1, 2, 3]);
    assert.deepEqual(result, false);
  });
});
