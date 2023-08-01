/*

Given two temperatures, return true if one is less than 0 and the other is greater than 100.


icyHot(120, -1) → true
icyHot(-1, 120) → true
icyHot(2, 120) → false
*/

import { assert } from "chai"
import { icyHot } from "../src"

describe("icyHot", ()=> {

    it("Should return True when one is 120 and -1 are the tempretures", () => {
        const result = icyHot(120, -1)
        assert.equal(result, true)
    })

    it("Should return True when one is -1 and 120 are the tempretures", () => {
        const result = icyHot(-1, 120)
        assert.equal(result, true)
    })

    it("Should return false when one is 120 and 2 are the tempretures", () => {
        const result = icyHot(120, 2)
        assert.equal(result, false)
    })

    it("Should return false when one is -1 and 100 are the tempretures", () => {
        const result = icyHot(-1, 100)
        assert.equal(result, false)
    })

    it("Should return false when one is -2 and -2 are the tempretures", () => {
        const result = icyHot(-2, -2)
        assert.equal(result, false)
    })

    it("Should return false when one is 120 and 120 are the tempretures", () => {
        const result = icyHot(120, 120)
        assert.equal(result, false)
    })
})