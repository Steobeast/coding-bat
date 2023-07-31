import { assert } from "chai";
import { stringX } from "../src";

describe("stringX", () => {
  it("should return a string with all the x's removed barring the first and last x", () => {
    const result = stringX("xxHxix");
    assert.equal(result, "xHix");
  });
  it("should return a string with all the x's removed when given a string with x's only in the middle", () => {
    const result = stringX("abxxxcd");
    assert.equal(result, "abcd");
  });
  it("should return a string with no x's removed from a word with x at the front and end of the string", () => {
    const result = stringX("xabxxxcdx");
    assert.equal(result, "xabcdx");
  });
  it("should return a string with 2 x's when the entire string is just x's", () => {
    const result = stringX("xxxxxxxxxxx");
    assert.equal(result, "xx");
  });
  it("should return a string with capital X removed from a string with a capital in it", () => {
    const result = stringX("xaXXdx");
    assert.deepEqual(result, "xadx");
  });
});
