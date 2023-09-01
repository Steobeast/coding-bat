import { assert } from "chai";
import { array667 } from "../src"


describe("array667()", () => {
    it("should return the number of times a 6 follows a 6", () => {
        const result = array667([6,6,8,9,6]);
        assert.equal(result, 1)
    })

    it("should return the number of times a 6 follows a 6 multiple times", () => {
        const result = array667([6,6,6,8,9,6]);
        assert.equal(result, 2)
    })

    it("should return 0 if 66 is inserted instead of just a 6", () => {
        const result = array667([66,6,8,9,6]);
        assert.equal(result, 0)
    })

    it("should return 0 if they never follow with a 6 or 7", () => {
        const result = array667([6,8,6,2,6,8,9,6]);
        assert.equal(result, 0)
    })

    it("should return the number of times a 6 follows a 6 multiple times with a 7 as well", () => {
        const result = array667([6,6,6,7, 8,9,6]);
        assert.equal(result, 3)
    })
})