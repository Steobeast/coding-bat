import { assert } from "chai"
import { notString } from "../src"


describe("Should return a string with not at the front unless  the string already starts with not", () => {

    it("Should take candy and return not candy", () => {
        const result = notString("Candy")
        assert.equal(result, "not Candy")
    })

    it("Should take x and return not x", () => {
        const result = notString("x")
        assert.equal(result, "not x")
    })

    it("Should take not bad and return not bad", () => {
        const result = notString("not bad")
        assert.equal(result, "not bad")
    })


    
    
})