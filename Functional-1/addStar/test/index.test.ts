/*
Given a list of strings, return a list where each string has "*" added at its end.

addStar(["a", "bb", "ccc"]) → ["a*", "bb*", "ccc*"]
addStar(["hello", "there"]) → ["hello*", "there*"]
addStar(["*"]) → ["**"]
*/

import { assert } from "chai"
import { addStar } from "../src"

describe("Should take a list of strings and add a * to item in the list at the end", () => {
    it("Should take a list and add a star to each item at the end of each item", () => {
        const result = addStar(["a", "bb", "ccc"])
        assert.deepEqual(result, ["a*", "bb*", "ccc*"])
    })
    it("Should take a list and add a star to each item at the end of each item", () => {
        const result = addStar(["hello", "there"])
        assert.deepEqual(result, ["hello*", "there*"])
    })
    it("Should take a list and add a star to each item at the end of each item", () => {
        const result = addStar(["*"])
        assert.deepEqual(result, ["**"])
    })
})