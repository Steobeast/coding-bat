
/*
Given a string and a non-negative int n, return a larger string that is n copies of the original string.


stringTimes("Hi", 2) → "HiHi"
stringTimes("Hi", 3) → "HiHiHi"
stringTimes("Hi", 1) → "Hi"
*/

import { assert } from "chai"
import { stringTimes } from "../src"

describe("Should take a given string and repeat it for the amount of times there is a value/int given", () => {
    it('Should return HiHi when the string given is Hi and the int number it 2', () => {
        const result = stringTimes("Hi", 2)
        assert.equal(result, "HiHi")
    })

    it('Should return Hi when the string given is Hi and the int number it 1', () => {
        const result = stringTimes("Hi", 1)
        assert.equal(result, "Hi")
    })

    it('Should return HiHiHi when the string given is Hi and the int number it 3', () => {
        const result = stringTimes("Hi", 3) 
        assert.equal(result, "HiHiHi")
    })



})