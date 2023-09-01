import { assert } from "chai";
import { altPairs } from "../src"


describe("altPairs()", () => {
    it("should return a string with only select indexs of the origional string", () => {
        const result = altPairs("Kittens");
        assert.equal(result, "Kien")
    })

    it("should return a string with only select indexs of the origional string with a word with 12 indexes", () => {
        const result = altPairs("KittensHeaven");
        assert.equal(result, "Kienean")
    })

    it("should return a string with only select indexs of the origional string with a word with 3 indexes", () => {
        const result = altPairs("Kitt");
        assert.equal(result, "Ki")
    })

    it("should return a string a blank string", () => {
        const result = altPairs("");
        assert.equal(result, "")
    })

    it("should return a string with 1 index", () => {
        const result = altPairs("K");
        assert.equal(result, "K")
    })
})