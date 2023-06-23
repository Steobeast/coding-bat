import { assert } from "chai"
import { makes10 } from "../src"


describe('If a number a or b is 10 or the sum of a and be is 10 return true', () => {
    
    //makes10(9, 10) → true
    it('Answer should be true as b is 10', () => {
        const result = makes10(9, 10)
        assert.equal(result, true)
    })

    //makes10(9, 9) → false
    it('Should be false as neither a or b is 10 and the sum is also not 10', () => {
        const result = makes10(9, 9)
        assert.equal(result, false)
    })

    //makes10(1, 9) → true
    it('Should be true as the sum of a and b is 10', () => {
        const result = makes10(1,9)
        assert.equal(result, true)
    })

    //makes10(10, 1)	True
    it('Should be true as a is 10', () => {
        const result = makes10(10,1)
        assert.equal(result, true)
    })

    //makes10(10, 10)	True
    it('Should be true as a and b is 10', () => {
        const result = makes10(10,10)
        assert.equal(result, true)
    })

    //makes10(8, 2)	True
    it('Should be true as the sum of a and b is 10', () => {
        const result = makes10(8, 2)
        assert.equal(result, true)
    })

    //makes10(8, 3)	False
    it('Should be true as the sum of a and b is 10', () => {
        const result = makes10(8, 3)
        assert.equal(result, false)
    })

    //makes10(10, 42)	True
    it('Should be true as a = 10', () => {
        const result = makes10(10, 42)
        assert.equal(result, true)
    })

    //makes10(12, -2)	True
    it('Should be true as the sum of a and b is 10', () => {
        const result = makes10(12, -2)
        assert.equal(result, true)
    })
})