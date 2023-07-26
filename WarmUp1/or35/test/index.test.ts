/*Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod" operator -- see Introduction to Mod


or35(3) → true
or35(10) → true
or35(8) → false

*/

import { assert } from "chai"
import { or35 } from "../src"

describe("or35", () => {

    it("Should return true when 35 is passed into the alloted value", () => {
        const result = or35(35)
        assert.equal(result, true)
    })

    it("Should return true when 10 is passed into the alloted value", () => {
        const result = or35(10)
        assert.equal(result, true)
    })

    it("Should return false when 8 is passed into the alloted value", () => {
        const result = or35(8)
        assert.equal(result, false)
    })

    it("Should return true when 15 is passed into the alloted value", () => {
        const result = or35(15)
        assert.equal(result, true)
    })

    it("Should return true when 9 is passed into the alloted value", () => {
        const result = or35(9)
        assert.equal(result, true)
    })

    it("Should return true when 5 is passed into the alloted value", () => {
        const result = or35(5)
        assert.equal(result, true)
    })

    it("Should return false when 4 is passed into the alloted value", () => {
        const result = or35(4)
        assert.equal(result, false)
    })

    it("Should return false when 7 is passed into the alloted value", () => {
        const result = or35(7)
        assert.equal(result, false)
    })
})