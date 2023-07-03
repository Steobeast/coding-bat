import { assert } from "chai"
import { frontBack } from "../src"


describe("Front and Back letters from a given string must be reversed", () => {
    
    it("should take the word code and return eodc", () => {
        const result = frontBack("code")
        assert.equal(result, "eodc")
    })

    it("should take the word a and return a", () => {
        const result = frontBack("a")
        assert.equal(result, "a")
    })
    
    it("should take the word ab and return ba", () => {
        const result = frontBack("ab")
        assert.equal(result, "ba")
    })

    it("should take the word cba and return abc", () => {
        const result = frontBack("cba")
        assert.equal(result, "abc")
    })

    it("should take the word Chocolate and return ehocolatC", () => {
        const result = frontBack("Chocolate")
        assert.equal(result, "ehocolatC")
    })
})