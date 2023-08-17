import { assert } from "chai";
import { rotateLeft3 } from "../src";

describe("rotateLeft3()", () => {
  
  it("should return an array where all of the elements of the array have shifted one index to the left", () => {
    const result = rotateLeft3([1, 2, 3]);
    assert.deepEqual(result, [2, 3, 1]);
  });

  it("should return an array where all of the elements of the array have shifted one index to the left in an array of 2 elements", () => {
    const result = rotateLeft3([1, 2]);
    assert.deepEqual(result, [2, 1]);
  });

  it("should return an array unchanged when the length of the array is 1", () => {
    const result = rotateLeft3([1]);
    assert.deepEqual(result, [1]);
  });

  it("should return an array where all of the elements of the array have shifted one index to the left", () => {
    const result = rotateLeft3([7, 0, 0]);
    assert.deepEqual(result, [0, 0, 7]);
  });
});
