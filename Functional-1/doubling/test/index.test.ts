/*
Given a list of integers, return a list where each integer is multiplied by 2.


doubling([1, 2, 3]) → [2, 4, 6]
doubling([6, 8, 6, 8, -1]) → [12, 16, 12, 16, -2]
doubling([]) → []
*/

import { assert } from "chai"
import { doubling } from "../src"

describe("Should return a list of integers that have all been multiplied by 2", () => {
    
    it("Should return the list of [1, 2, 3] as [2, 4, 6]", () => {
    const result = doubling([1, 2, 3])
    assert.deepEqual(result,[2, 4, 6])
    })

    it("Should return the list of [6, 8, 6, 8, -1] as [12, 16, 12, 16, -2]", () => {
        const result = doubling([6, 8, 6, 8, -1])
        assert.deepEqual(result, [12, 16, 12, 16, -2])
        })
        
    it("Should return the list of [6, 8, 6, 8, -1] as [12, 16, 12, 16, -2", () => {
        const result = doubling([6, 8, 6, 8, -1])
        assert.deepEqual(result, [12, 16, 12, 16, -2])
        })
    
    it("Should return the list of [] as []", () => {
        const result = doubling([])
        assert.deepEqual(result, [])
        })
})