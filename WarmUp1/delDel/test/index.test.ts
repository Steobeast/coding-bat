/*
Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. 
Otherwise, return the string unchanged.

delDel("adelbc") → "abc"
delDel("adelHello") → "aHello"
delDel("adedbc") → "adedbc"
*/

import { assert } from "chai";
import { delDel } from "../src";

describe("delDel", () => {
    it("Should check if the string has del starting at index 1 and delete it if it is present", () => {
        const result = delDel("adelbc");
        assert.equal(result, "abc");
    });
    it("Should return a string expactly the same when del does not appear", () => {
        const result = delDel("adedbc");
        assert.equal(result, "adedbc");
    });
    it("Should check if the string has del starting at index 1 and delete it if it is present", () => {
        const result = delDel("adelHello");
        assert.equal(result, "aHello");
    });
    it("Should return the string as is if del appears after the first index", () => {
        const result = delDel("aadelHello");
        assert.equal(result, "aadelHello");
    });
    it("Should return a blank when given no string", () => {
        const result = delDel("");
        assert.equal(result, "");
    });
})