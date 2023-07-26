/*
Given a list of integers, return a list where each integer is multiplied with itself.

square([1, 2, 3]) → [1, 4, 9]
square([6, 8, -6, -8, 1]) → [36, 64, 36, 64, 1]
square([]) → []
*/

import { assert } from "chai";
import { square } from "../src";

describe("square", () => {
  it("Should take a list of positive intergers and return the square value of them", () => {
    const result = square([1, 2, 3]);
    assert.deepEqual(result, [1, 4, 9]);
  });

  it("Should take a list of positive intergers and return the square value of them", () => {
    const result = square([6, 8, -6, -8, 1]);
    assert.deepEqual(result, [36, 64, 36, 64, 1]);
  });

  it("Should take an empty list and return an empty list", () => {
    const result = square([]);
    assert.deepEqual(result, []);
  });
});
