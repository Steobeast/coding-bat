/*An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.

For example:

9 is an Armstrong number, because 9 = 9^1 = 9
10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
Write some code to determine whether a number is an Armstrong number.*/

import { assert } from "chai";
import { armstrongNumber } from "../src";

describe("armstrongNumber()", () => {
  it("should return an armstrong number", () => {
    const result = armstrongNumber(9);
    assert.equal(result, true);
  });

  it("should return an armstrong number", () => {
    const result = armstrongNumber(153);
    assert.equal(result, true);
  });

  it("should return false for a non armstrong number", () => {
    const result = armstrongNumber(154);
    assert.equal(result, false);
  });

  it("should return true if number is an armstrong number", () => {
    const result = armstrongNumber(407);
    assert.equal(result, true);
  });

  it("should return true if number is an armstrong number", () => {
    const result = armstrongNumber(1);
    assert.equal(result, true);
  });
});
