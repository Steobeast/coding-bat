import { assert } from "chai";
import { stringBits } from "../src";

describe("stringBits()", () => {

  it("Should return a string with every second char missing", () => {
    const result = stringBits("Hello");
    assert.equal(result, "Hlo");
  });

  it("Should return a single letter in a string of length 2", () => {
    const result = stringBits("Hi");
    assert.equal(result, "H");
  });

  it("Should return a string with every second characture missing", () => {
    const result = stringBits("Heeololeo");
    assert.equal(result, "Hello");
  });

  it("Should return a blank string", () => {
    const result = stringBits("");
    assert.equal(result, "");
  });

  it("Should return a long string with every second characture removed but with a space added", () => {
    const result = stringBits("Heeololeo Jrussythivn");
    assert.equal(result, "Hello Justin");
  });
});
