import { assert } from "chai"
import { makeEnds } from "../src"



describe('makeEnds', () => {
    
    it("should return an array with just the first last element of the given array", () => {
        const result = makeEnds([1,2,3])
        assert.deepEqual(result, [1,3])
    });

    it("should return an array with just the first last element of the given array", () => {
        const result = makeEnds([1,2,3,4,5,6])
        assert.deepEqual(result, [1,6])
    });

    it("should return a single element of array when the arrays length is 1", () => {
        const result = makeEnds([1])
        assert.deepEqual(result, [1])
    });

    it("should return a blank array", () => {
        const result = makeEnds([])
        assert.deepEqual(result, [])
    });

    it("should return an array with just the first last element of the given array even when given negative values", () => {
        const result = makeEnds([-1,2,-3])
        assert.deepEqual(result, [-1,-3])
    });
})