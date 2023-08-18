
// Given an array of ints length 3, figure out which is larger, the first or last element in the array, 
//and set all the other elements to be that value. Return the changed array.

import { assert } from "chai"
import { maxEnd3 } from "../src"

// maxEnd3([1, 2, 3]) → [3, 3, 3]
// maxEnd3([11, 5, 9]) → [11, 11, 11]
// maxEnd3([2, 11, 3]) → [3, 3, 3]

describe("maxEnd3()", () => {
    
    it("should return an array where all values/elements have been change to the larger last value", () => {
        const result = maxEnd3([1, 2, 3])
        assert.deepEqual(result, [3, 3, 3])
    })

    it("should return an array where all values/elements have been change to the larger first value", () => {
        const result = maxEnd3([3, 2, 1])
        assert.deepEqual(result, [3, 3, 3])
    })

    it("should return an array where all values/elements are the same", () => {
        const result = maxEnd3([1, 1, 1])
        assert.deepEqual(result, [1, 1, 1])
    })

    it("should return an array where all values/elements have been change to the larger of the first or last value when negative numbers are involved", () => {
        const result = maxEnd3([1, 2, -3])
        assert.deepEqual(result, [1, 1, 1])
    })

    it("should return an array where all values/elements are changed to the higher of the negative first or last element", () => {
        const result = maxEnd3([-1, -2, -3])
        assert.deepEqual(result, [-1, -1, -1])
    })
})