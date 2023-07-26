/*

Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.


front22("kitten") → "kikittenki"
front22("Ha") → "HaHaHa"
front22("abc") → "ababcab"
 */

import { assert } from "chai"
import { front22 } from "../src"

describe("front22", () => {

    it("Should take kitten and return kikittenki", () => {
        const result = front22("kitten")
        assert.equal(result, "kikittenki")
    })

    it("Should take ha and return hahaha", () => {
        const result = front22("Ha")
        assert.equal(result, "HaHaHa")
    })

    it("Should take abc and return ababcab", () => {
        const result = front22("abc")
        assert.equal(result, "ababcab")
    })

    it("Should take ab and return ababab", () => {
        const result = front22("ab")
        assert.equal(result, "ababab")
    })

    it("Should take blank and return blank", () => {
        const result = front22("")
        assert.equal(result, "")
    })

    it("Should take a and return aaa", () => {
        const result = front22("a")
        assert.equal(result, "aaa")
    })
})