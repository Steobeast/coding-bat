/*

Given 2 int values, return true if either of them is in the range 10..20 inclusive.


in1020(12, 99) → true
in1020(21, 12) → true
in1020(8, 99) → false
*/

import { assert } from "chai"
import { in1020 } from "../src"

describe("in1020", () => {

    it("Should return true when given the numbers 12 and 99", () => {
        const result = in1020(12, 99)
        assert.equal(result, true)
    })

    it("Should return true when given the numbers 12 and 99", () => {
        const result = in1020(21, 12)
        assert.equal(result, true)
    })

    it("Should return false when given the numbers 8 and 99", () => {
        const result = in1020(8, 99)
        assert.equal(result, false)
    })

    it("Should return false when given the numbers 21 and 21", () => {
        const result = in1020(21, 21)
        assert.equal(result, false)
    })

    it("Should return false when given the numbers 9 and 9", () => {
        const result = in1020(9, 9)
        assert.equal(result, false)
    })

    it("Should return true when given the numbers 20 and 20", () => {
        const result = in1020(20, 20)
        assert.equal(result, true)
    })

    it("Should return true when given the numbers 99 and 10", () => {
        const result = in1020(99, 10)
        assert.equal(result, true)
    })

})