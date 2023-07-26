/*

Given a string, return true if the string starts with "hi" and false otherwise.


startHi("hi there") → true
startHi("hi") → true
startHi("hello hi") → false
 */

import { assert } from "chai"
import { startHi } from "../src"

describe("startHi", () => {

    it("Should return true when ,hi there, is passed into the equation", () => {
        const result = startHi("hi there")
        assert.equal(result, true)
    })

    it("Should return true when ,hi, is passed into the equation", () => {
        const result = startHi("hi")
        assert.equal(result, true)
    })

    it("Should return false when ,blank, is passed into the equation", () => {
        const result = startHi("")
        assert.equal(result, false)
    })

    it("Should return false when ,hi ho, is passed into the equation", () => {
        const result = startHi("hi ho")
        assert.equal(result, true)
    })

    it("Should return false when ,he, is passed into the equation", () => {
        const result = startHi("he")
        assert.equal(result, false)
    })

    it("Should return false when ,there hi, is passed into the equation", () => {
        const result = startHi("there hi")
        assert.equal(result, false)
    })

    it("Should return false when ,there h, is passed into the equation", () => {
        const result = startHi("h")
        assert.equal(result, false)
    })

    it("Should return false when ,ho hi, is passed into the equation", () => {
        const result = startHi("ho hi")
        assert.equal(result, false)
    })
})