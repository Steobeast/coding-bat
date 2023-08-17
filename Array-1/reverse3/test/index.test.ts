import { assert } from "chai";
import { reverse3 } from "../src";

describe("reverse3()", () => {
  it("should return the given array in reverse order", () => {
    const result = reverse3([1, 2, 3]);
    assert.deepEqual(result, [3, 2, 1]);
  });

  it("should return the given array in reverse order", () => {
    const result = reverse3([5, 11, 9]);
    assert.deepEqual(result, [9, 11, 5]);
  });

  it("should return the given array in reverse order", () => {
    const result = reverse3([7, 0, 0]);
    assert.deepEqual(result, [0, 0, 7]);
  });

  it("should return an empty array", () => {
    const result = reverse3([]);
    assert.deepEqual(result, []);
  });

  it("should return a reversed long array", () => {
    const result = reverse3([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(result, [9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });  
});
