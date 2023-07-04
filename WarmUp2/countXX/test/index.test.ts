import { assert } from "chai"
import { countXX } from "../src"


describe("Should count the number of xx in a given string with overlapping allow ie xx = 1 and xxx = 2", () => {

    it("Should take abcxx and return a count of 1", () => {
        const result = countXX("abcxx")
        assert.equal(result, 1)
    })

    it("Should take xxx and return a count of 2", () => {
        const result = countXX("xxx")
        assert.equal(result, 2)
    })

    it("Should take xxxx and return a count of 3", () => {
        const result = countXX("xxxx")
        assert.equal(result, 3)
    })

    it("Should take abc and return a count of 0", () => {
        const result = countXX("abc")
        assert.equal(result, 0)
    })

    it("Should take Hexxo thxxe and return a count of 2", () => {
        const result = countXX("Hexxo Thxxe")
        assert.equal(result, 2)
    })

    it("Should take blank and return a count of 0", () => {
        const result = countXX("")
        assert.equal(result, 0)
    })

    it("Should take Kittens and return a count of 0", () => {
        const result = countXX("Kittens")
        assert.equal(result, 0)
    })

    it("Should take Kittensxxx and return a count of 2", () => {
        const result = countXX("Kittensxxx")
        assert.equal(result, 2)
    })
})