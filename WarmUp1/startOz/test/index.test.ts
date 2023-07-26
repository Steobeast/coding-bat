/**
 * Given a string, return a string made of the first 2 chars (if present), 
 * however include first char only if it is 'o' and include the second only if it is 'z', so "ozymandias" yields "oz".

startOz("ozymandias") → "oz"
startOz("bzoo") → "z"
startOz("oxx") → "o"
 */

import { assert } from "chai";
import { startOz } from "../src";

describe("startOz", () => {
  it("Should return the first 2 charactures in string", () => {
    const result = startOz("ozymandias");
    assert.equal(result, "oz")
  });
  it("Should return only a z if the second letter is a z", () => {
    const result = startOz("bzoo");
    assert.equal(result, "z")
  });
  it("Should return the first 1 characture in string if it is a o", () => {
    const result = startOz("oxx");
    assert.equal(result, "o")
  });
  it("Should return blank", () => {
    const result = startOz("");
    assert.equal(result, "")
  });
  it("Should return the first 1 characture in string if it is a o", () => {
    const result = startOz("o");
    assert.equal(result, "o")
  });
  it("Should return the first 2 characture in string if it is a z", () => {
    const result = startOz("zzzz");
    assert.equal(result, "z")
  });

});
