/*
Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie.
Note that Math.abs(n) returns the absolute value of a number.


close10(8, 13) → 8
close10(13, 8) → 8
close10(13, 7) → 0
*/

import { assert } from "chai";
import { close10 } from "../src";

describe("close10", () => {
  it("should return the value closer to 10", () => {
    const result = close10(8, 13);
    assert.equal(result, 8);
  });
  it("should return the value closer to 10", () => {
    const result = close10(13, 8);
    assert.equal(result, 8);
  });
  it("should return 0 if values are the same", () => {
    const result = close10(8, 8);
    assert.equal(result, 0);
  });
  it("should return the value closer to 10 even when given negative numbers", () => {
    const result = close10(-8, -13);
    assert.equal(result, -8);
  });
  it("should return the value to 0 even when given high numbers", () => {
    const result = close10(99, 99);
    assert.equal(result, 0);
  });
});
