/*

Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.


in3050(30, 31) → true
in3050(30, 41) → false
in3050(40, 50) → true
*/

import { assert } from "chai";
import { in3050 } from "../src";

describe("in3050", () => {
  it("Shoulde return true when the values 30, 31 are passed in", () => {
    const result = in3050(30, 31);
    assert.equal(result, true);
  });
  it("Shoulde return false when the values 30, 41 are passed in", () => {
    const result = in3050(30, 41);
    assert.equal(result, false);
  });
  it("Shoulde return true when the values 40, 50 are passed in", () => {
    const result = in3050(40, 50);
    assert.equal(result, true);
  });
});
