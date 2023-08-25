import { assert } from "chai";
import { doubleX } from "../src"


describe("doubleX()", () => {
    
    it("should true if a x is followed directly by another x", () => {
        const result = doubleX("axxbb");
        assert.equal(result, true)
    })

    it("should false if a x is not followed directly by another x", () => {
        const result = doubleX("axaxbb");
        assert.equal(result, false)
    })

    it("should true if a x is followed directly by another x", () => {
        const result = doubleX("xxxxxx");
        assert.equal(result, true)
    })

    it("should an empty false if an empty string is passing in", () => {
        const result = doubleX("");
        assert.equal(result, false)
    })

    it("should true if a x is followed directly by another x but capital", () => {
        const result = doubleX("XX");
        assert.equal(result, true)
    })
})