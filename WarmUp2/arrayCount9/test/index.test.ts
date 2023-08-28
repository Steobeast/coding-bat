import { assert } from "chai"
import { arrayCount9 } from "../src"

describe("arrayCount9()", () => {

    it('should return the number of 9s in an array', () => {
        const result = arrayCount9([1,2,7,8,9,9,6,5,9])
        assert.equal(result, 3)
    })

    it('should return only the full number 9', () => {
        const result = arrayCount9([1, 0.9,2, 0.99,7,8,9,9,6,5,9])
        assert.equal(result, 3)
    })

    it('should return 0 when there are no 9 values in the array', () => {
        const result = arrayCount9([1, 0.9,2, 0.99,7,8,6,5])
        assert.equal(result, 0)
    })

    it('should return 0 when given an empty array ', () => {
        const result = arrayCount9([])
        assert.equal(result, 0)
    })

    it('should return only the full number 9 when given numbers with multiple 9', () => {
        const result = arrayCount9([1, 0.9,2, 0.99,7,8,9,9,6,5,9, 99, 90, 91])
        assert.equal(result, 3)
    })
})