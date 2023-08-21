import { assert } from "chai";
import { sum2 } from "../src";


describe("sum2()", () => {

    it("should return the addition of the first 2 numbers in an array", () => {
        const result = sum2([1,2,3,4]);
        assert.deepEqual(result, 3)
    })

    it("should return the addition of 2 numbers in an array", () => {
        const result = sum2([4,5]);
        assert.deepEqual(result, 9)
    })

    it("should return the only number in an array", () => {
        const result = sum2([1]);
        assert.deepEqual(result, 1)
    })

    it("should return 0 if the array is empty", () => {
        const result = sum2([0]);
        assert.deepEqual(result, 0)
    })

    it("should return the sum of a negative and postive number", () => {
        const result = sum2([1, -2]);
        assert.deepEqual(result, -1)
    })

})