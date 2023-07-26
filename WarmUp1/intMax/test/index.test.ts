/**
 
Given three int values, a b c, return the largest.


intMax(1, 2, 3) → 3
intMax(1, 3, 2) → 3
intMax(3, 2, 1) → 3
 */

import { assert } from "chai";
import { intMax } from "../src";

describe("intMax", () => {
    it("Should return the largest of 3 different intergers", () => {
        const result = intMax(1, 2, 3);
        assert.equal(result, 3)
    })
    it("Should return the largest of 2 intergers that are the same and 1 different", () => {
        const result = intMax(2, 2, 3);
        assert.equal(result, 3)
    })
    it("Should return the interger of the 3 same values", () => {
        const result = intMax(3, 3, 3);
        assert.equal(result, 3)
    })
    it("Should return the largest interger of the 3 differnt negative values", () => {
        const result = intMax(-3, -1, -2);
        assert.equal(result, -1)
    })
    
})