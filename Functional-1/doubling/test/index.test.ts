

/*
Given a list of integers, return a list where each integer is multiplied by 2.
doubling([1, 2, 3]) → [2, 4, 6]
doubling([6, 8, 6, 8, -1]) → [12, 16, 12, 16, -2]
doubling([]) → []
*/

import { assert } from "chai"
import { doubling } from "../src"

describe("doubling", () => {
    it("Should take an array and return the same length array but doubled", () => {
        const result = doubling([1, 2, 3])
    assert.deepEqual(result,[2, 4, 6])
    })

    it("Should return an array where all numbers have been doubled including negative numbers", () => {
        const result = doubling([6, 8, 6, 8, -1])
        assert.deepEqual(result, [12, 16, 12, 16, -2])
        })
    it("Should take a blank array and return a blank array", () => {
        const result = doubling([])
        assert.deepEqual(result, [])
        })
})