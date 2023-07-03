import { assert } from "chai"
import { front3 } from "../src"


describe("It should repeat the first 3 letters of a word over 3 times unless the string is less than 3 letter then just repeat the same letters 3 times", () => {

    it("Should take in the word Java and return JavJavJav", () => {
        const result = front3("Java")
        assert.equal(result, "JavJavJav")
    })

    it("Should take in the word Chocolate and return ChoChoCho", () => {
        const result = front3("Chocolate")
        assert.equal(result, "ChoChoCho")
    })

    it("Should take in the word abcabcabc and return abcabcabc", () => {
        const result = front3("abcabcabc")
        assert.equal(result, "abcabcabc")
    })

    it("Should take in the word abcXYZ and return abcXYZ", () => {
        const result = front3("abcXYZ")
        assert.equal(result, "abcabcabc")
    })

    it("Should take in the word aaa and return aaa", () => {
        const result = front3("aaa")
        assert.equal(result, "aaaaaaaaa")
    })
})