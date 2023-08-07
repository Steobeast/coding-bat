/*
Return true if the given string contains between 1 and 3 'e' chars.


stringE("Hello") → true
stringE("Heelle") → true
stringE("Heelele") → false

*/

import { assert } from "chai"
import { stringE } from "../src"

describe("stringE()", () => {

    it('Should return true when given a string with an e', () => {
        const result = stringE("Hello")
        assert.equal(result, true)
    })

    it('Should return true when given a string with 3 letter e in it', () => {
        const result = stringE("Heelle")
        assert.equal(result, true)
    })

    it('Should return false when given a string with more than 3 e', () => {
        const result = stringE("Heelele")
        assert.equal(result, false)
    })

    it('Should return true when given a string with a single e', () => {
        const result = stringE("e")
        assert.equal(result, true)
    })
    
    it("Should return false when given a blank string", () => {
        const result = stringE("")
        assert.equal(result, false)
    })
})