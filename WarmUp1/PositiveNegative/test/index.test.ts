import { assert } from "chai"
import { posNeg } from "../src"


describe("Given 2 numbers, should return true if one is negative and one is positive. Unless parameter Negative is trye, then return True only if both are negative", () => {

    it("Should return true if parameters are set to 1, -1 and false", () => {
        const result = posNeg(1, -1, false)
        assert.equal(result, true) 
    })

    it("Should return true if parameters are set to -1, 1 and false", () => {
        const result = posNeg(1, -1, false)
        assert.equal(result, true) 
    })

    it("Should return true if parameters are set to -4, -5 and true", () => {
        const result = posNeg(-4, -5, true)
        assert.equal(result, true) 
    })

    it("Should return true if parameters are set to -4, -5 and false", () => {
        const result = posNeg(-4, -5, false)
        assert.equal(result, false) 
    })

    it("Should return true if parameters are set to -4, 5 and true", () => {
        const result = posNeg(-4, 5, false)
        assert.equal(result, true) 
    })

    it("Should return true if parameters are set to -4, 5 and true", () => {
        const result = posNeg(1, -1, true)
        assert.equal(result, false) 
    })

    it("Should return true if parameters are set to 1, 1 and false", () => {
        const result = posNeg(1, 1, false)
        assert.equal(result, false) 
    })

    it("Should return true if parameters are set to -1, -1 and false", () => {
        const result = posNeg(-1, -1, false)
        assert.equal(result, false) 
    })

    it("Should return true if parameters are set to 1, -1 and true", () => {
        const result = posNeg(1, -1, true)
        assert.equal(result, false) 
    })

    it("Should return true if parameters are set to -1, 1 and true", () => {
        const result = posNeg(-1, 1, true)
        assert.equal(result, false) 
    })

    it("Should return true if parameters are set to 1, 1 and true", () => {
        const result = posNeg(1, 1, true)
        assert.equal(result, false) 
    })

    it("Should return true if parameters are set to -1, -1 and true", () => {
        const result = posNeg(-1, -1, true)
        assert.equal(result, true) 
    })

    it("Should return true if parameters are set to 5, -5 and false", () => {
        const result = posNeg(5, -5, false)
        assert.equal(result, true) 
    })

    it("Should return true if parameters are set to 6, -6 and false", () => {
        const result = posNeg(6, -6, false)
        assert.equal(result, true) 
    })

    it("Should return true if parameters are set to -5, -6 and false", () => {
        const result = posNeg(-5, -6, false)
        assert.equal(result, false) 
    })

    it("Should return true if parameters are set to -2, -1 and false", () => {
        const result = posNeg(-2, -1, false)
        assert.equal(result, false) 
    })

    it("Should return true if parameters are set to 1, 2 and false", () => {
        const result = posNeg(1, 2, false)
        assert.equal(result, false) 
    })

    it("Should return true if parameters are set to -5, 6 and true", () => {
        const result = posNeg(-5, 6, true)
        assert.equal(result, false) 
    })

    it("Should return true if parameters are set to -5, -5 and true", () => {
        const result = posNeg(-5, -5, true)
        assert.equal(result, true) 
    })

})