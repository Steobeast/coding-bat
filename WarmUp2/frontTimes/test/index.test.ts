

/* 
Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;


frontTimes("Chocolate", 2) → "ChoCho"
frontTimes("Chocolate", 3) → "ChoChoCho"
frontTimes("Abc", 3) → "AbcAbcAbc"*/

import { assert } from "chai"
import { frontTimes } from "../src"

describe("Should return the first 3 or front charactures n amount of times as dictated by n", () => {

    it("Should return ChoCho, when Chocolate is used and the number given is 2", () => {
        const result = frontTimes("Chocolate", 2)
        assert.equal(result, "ChoCho") 
    })

    it("Should return ChoChoCho, when Chocolate is used and the number given is 3", () => {
        const result = frontTimes("Chocolate", 3)
        assert.equal(result, "ChoChoCho") 
    })

    it("Should return AbcAbcAbc, when Abc is used and the number given is 3", () => {
        const result = frontTimes("Abc", 3)
        assert.equal(result, "AbcAbcAbc") 
    })

    it("Should return AbAbAbAb, when Ab is used and the number given is 4", () => {
        const result = frontTimes("Ab", 4)
        assert.equal(result, "AbAbAbAb") 
    })

    it("Should return AAAA, when A is used and the number given is 4", () => {
        const result = frontTimes("A", 4)
        assert.equal(result, "AAAA") 
    })

    it("Should return blank, when str is blank is used and the number given is 4", () => {
        const result = frontTimes("", 4)
        assert.equal(result, "") 
    })

    it("Should return blank, when str is set to Abd is used and the number given is 0", () => {
        const result = frontTimes("Abc", 0)
        assert.equal(result, "") 
    })


})