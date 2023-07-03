import { assert } from "chai"
import { backAround } from "../src"


describe("Should take the last letter of a string and return a string that has that last letter in the front and repeated at the back of the string", () => {

    it("Should take in the word cat and return tcatt", () => {
        const result = backAround("cat")
        assert.equal(result, "tcatt")
    })

    it("Should take in the word hello and return ohelloo", () => {
        const result = backAround("hello")
        assert.equal(result, "ohelloo")
    })

    it("Should take in the word a and return aaa", () => {
        const result = backAround("a")
        assert.equal(result, "aaa")
    })

    it("Should take in the word abc and return cabcc", () => {
        const result = backAround("abc")
        assert.equal(result, "cabcc")
    })

    it("Should take in the word read and return dreadd", () => {
        const result = backAround("read")
        assert.equal(result, "dreadd")
    })

    it("Should take in the word boo and return obooo", () => {
        const result = backAround("boo")
        assert.equal(result, "obooo")
    })
})