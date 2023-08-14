// Given 2 arrays of ints, a and b, return true if they have the same first element
//  or they have the same last element. Both arrays will be length 1 or more.

import { assert } from "chai";
import { commonEnd } from "../src";

// commonEnd([1, 2, 3], [7, 3]) → true
// commonEnd([1, 2, 3], [7, 3, 2]) → false
// commonEnd([1, 2, 3], [1, 3]) → true

describe("commonEnd", () => {
  it("should return true when the first elements in the array are the same", () => {
    const result = commonEnd([1, 2, 3], [1, 7]);
    assert.deepEqual(result, true);
  });

  it("should return true when the last elements in the array are the same", () => {
    const result = commonEnd([2, 2, 3], [1, 3]);
    assert.deepEqual(result, true);
  });

  it("should return false when neither the front or end elements in the array are the same", () => {
    const result = commonEnd([5, 1, 2, 3], [1, 7]);
    assert.deepEqual(result, false);
  });

  it("should return true when the only element in the array is the same", () => {
    const result = commonEnd([3], [3]);
    assert.deepEqual(result, true);
  });

  it("should return true when there are no elements in the array", () => {
    const result = commonEnd([], []);
    assert.deepEqual(result, true);
  });
});
