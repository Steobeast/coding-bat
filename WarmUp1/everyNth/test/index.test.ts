/**
 
Given a non-empty string and an int N, return the string made starting with char 0, 
and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.


everyNth("Miracle", 2) → "Mrce"
everyNth("abcdefg", 2) → "aceg"
everyNth("abcdefg", 3) → "adg"
 */

import { assert } from "chai";
import { everyNth } from "../src";

describe("everyNth()", () => {
    it("Should return a string that has been modified to only show the every 2nd letter", () => {
        const result = everyNth("Miracle", 2);
        assert.equal(result, "Mrce")
    })
    it("Should return a string that has been modified to only show the every 2nd letter", () => {
        const result = everyNth("abcdefg", 2);
        assert.equal(result, "aceg")
    })
    it("Should return a string that has been modified to only show the every 3nd letter", () => {
        const result = everyNth("abcdefg", 3);
        assert.equal(result, "adg")
    })
    it("Should return a string that has been modified to only show the every 5nd letter", () => {
        const result = everyNth("abcdefghijklmnop", 5);
        assert.equal(result, "afkp")
    })
    it("Should return a string that has been modified to only show the every 4nd letter", () => {
        const result = everyNth("abcdefg", 4);
        assert.equal(result, "ae")
    })
    it("Should return a string that has been modified to only show the every 3nd letter", () => {
        const result = everyNth("abcdefg", 3);
        assert.equal(result, "adg")
    })
})