/*
Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.


endUp("Hello") → "HeLLO"
endUp("hi there") → "hi thERE"
endUp("hi") → "HI"
*/

import { assert } from "chai";
import { endUp } from "../src";

describe("endup", () => {
  it("Should return a string where the last 3 char are upper case", () => {
    const result = endUp("Hello");
    assert.equal(result, "HeLLO");
  });
  it("Should return a string where the last 3 char are upper case", () => {
    const result = endUp("hi there");
    assert.equal(result, "hi thERE");
  });
  it("Should return a string where the last 3 char are upper case", () => {
    const result = endUp("hi");
    assert.equal(result, "HI");
  });
  it("Should return a string where the last letter is capital and the rest numbers", () => {
    const result = endUp("xyz12");
    assert.equal(result, "xyZ12");
  });
  it("Should return a blank string when given a blank string", () => {
    const result = endUp("");
    assert.equal(result, "");
  });
  
});
