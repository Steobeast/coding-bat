// Given an array of ints length 3, return the sum of all the elements.

import { assert } from "chai";
import { sum3 } from "../src";

// sum3([1, 2, 3]) → 6
// sum3([5, 11, 2]) → 18
// sum3([7, 0, 0]) → 7

describe("sum3()", () => {
  it("should return the sum of a given array where all the elements have been added together", () => {
    const result = sum3([1, 2, 3]);
    assert.equal(result, 6);
  });

  it("should return the sum of a given array where all the elements have been added together even with negative numbers ", () => {
    const result = sum3([5, 11, -2]);
    assert.equal(result, 14);
  });

  it("should return the sum of a given array where all the elements have been added together", () => {
    const result = sum3([7, 0, 0]);
    assert.equal(result, 7);
  });

  it("should return the sum of a given array when the array is empty", () => {
    const result = sum3([]);
    assert.equal(result, 0);
  });

  it("should return the sum of a given array where all the elements have been added together up to length 3", () => {
    const result = sum3([1, 2, 3]);
    assert.equal(result, 6);
  });
});
