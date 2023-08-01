/**
 * Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.


mixStart("mix snacks") → true
mixStart("pix snacks") → true
mixStart("piz snacks") → false
 */

import { assert } from "chai";
import { mixStart } from "../src";

describe("mixStart", () => {
  it("Should return true when given a string with ix at index 2 and 3 respectively", () => {
    const result = mixStart("mix snacks");
    assert.equal(result, true);
  });
  it("Should return true when given a string with ix at index 2 and 3 respectively but a different first letter", () => {
    const result = mixStart("pix snacks");
    assert.equal(result, true);
  });
  it("Should return false when given a string where index 3 are not x", () => {
    const result = mixStart("piz snacks");
    assert.equal(result, false);
  });
  it("Should return false when given a string is blank", () => {
    const result = mixStart("");
    assert.equal(result, false);
  });
});
