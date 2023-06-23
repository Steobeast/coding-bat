import { assert } from "chai"
import { nearHundred } from "../src"

describe('It shouod give a true if the answer is within 10 of 100, else false', () => {
    it('Should give an answer of True because 93 is within 10 from 100', () => {
        const result = nearHundred(93)
        assert.equal(result, true)
    })
    it('Should give an answer of True because 90 is within 10 from 100', () => {
        const result = nearHundred(90)
        assert.equal(result, true)
    })
    it('Should give an answer of false because 89 is not within 10 from 100', () => {
        const result = nearHundred(89)
        assert.equal(result, false)
    })
    it('Should give an answer of True because 221 is not within 10 from 100', () => {
        const result = nearHundred(221)
        assert.equal(result, false)
    })
    it('Should give an answer of True because 206 is within 10 from 100', () => {
        const result = nearHundred(-206)
        assert.equal(result, true)
    })
})