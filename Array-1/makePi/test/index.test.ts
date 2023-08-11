import { assert } from "chai";
import { makePi } from "../src";


describe("makePi()", () => {
    
    it('should return the first 3 digits of pi in an array form', () => {
        const pi = Math.PI
        const result = makePi(pi);
        assert.deepEqual(result, [3, 1, 4])
    })

    it("should return all the values when a 2 digit number is passed in", () => {
        const result = makePi(12);
        assert.deepEqual(result, [1,2])
    })
})