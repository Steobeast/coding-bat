import { assert } from "chai";
import { last2 } from "../src"


describe("last2()", () => {
    it("should return the amount of time the last 2 char in a string appear throughout the string", () => {
        const result = last2("hixxhi");
        assert.equal(result, 1)
    })

    it("should return a count of 2 in the given string", () => {
        const result = last2("abbbcdebb");
        assert.equal(result, 2)
    })

    it("should return a count of 0 in the given string of length 2", () => {
        const result = last2("bb");
        assert.equal(result, 0 )
    })

    it("should return a count of 0 in the given string of length 0", () => {
        const result = last2("");
        assert.equal(result, 0 )
    })

    it("should return a count of 7 in the given the string", () => {
        const result = last2("bbbbbbbbbb");
        assert.equal(result, 7 )
    })
})