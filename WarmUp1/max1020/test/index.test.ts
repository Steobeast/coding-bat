/*

Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, 
or return 0 if neither is in that range.

max1020(11, 19) → 19
max1020(19, 11) → 19
max1020(11, 9) → 11
*/

import { assert } from "chai";
import { max1020 } from "../src";

describe("max1020()", () => {
    it("Should return the higher of the 2 values within range", () => {
        const result = max1020(11, 19);
        assert.equal(result, 19);
    });
    it("Should return the higher of the 2 values witin range", () => {
        const result = max1020(19, 11);
        assert.equal(result, 19);
    });
    it("Should return the only value within range", () => {
        const result = max1020(111, 19);
        assert.equal(result, 19);
    });
    it("Should return 0 as both values are out of range", () => {
        const result = max1020(111, 191);
        assert.equal(result, 0);
    });
})