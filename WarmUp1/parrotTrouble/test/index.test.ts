import { assert } from "chai"
import { parrotTrouble } from "../src"


describe('It should determine whether we are in trouble when the parrot is talking between certain hours', () => {

    //parrotTrouble(true, 6) → true
    it('Should be be true if the parrot is talking before 7', () => {
        const result = parrotTrouble(true, 6)
        assert.equal(result, true)

    })

    //parrotTrouble(false, 6) → false
    it('Should be false if the parrot is not talking before 7', () => {
        const result = parrotTrouble(false, 6)
        assert.equal(result, false)
    })

    //parrotTrouble(true, 7) → false
    it('Should be false if the parrot is talking after 7 and before 20', () =>{
        const result = parrotTrouble(true, 7)
        assert.equal(result, false)
    })

    //parrotTrouble()parrot_trouble(True, 21)	True
    it('Should be true if the parrot is talking after 20', () =>{
        const result = parrotTrouble(true, 21)
        assert.equal(result, true)
    })

    //parrot_trouble(False, 21)	False
    it('Should be false if the parrot is not talking after 21', () =>{
        const result = parrotTrouble(false, 21)
        assert.equal(result, false)
    })

    //parrot_trouble(False, 21)	False
    it('Should be false if the parrot is not talking after 20', () =>{
        const result = parrotTrouble(false, 21)
        assert.equal(result, false)
    })

    //parrot_trouble(False, 20)	False
    it('Should be false if the parrot is not talking after 20', () =>{
        const result = parrotTrouble(false, 20)
        assert.equal(result, false)
    })

    //parrot_trouble(True, 23)	True
    it('Should be true if the parrot is talking after 20', () =>{
        const result = parrotTrouble(true, 23)
        assert.equal(result, true)
    })

    //parrot_trouble(False, 23)	False
    it('Should be false if the parrot is not talking after 20', () =>{
        const result = parrotTrouble(false, 23)
        assert.equal(result, false)
    })

    //parrot_trouble(True, 20)	False
    it('Should be false if the parrot is talking after 7 and before 20', () =>{
        const result = parrotTrouble(true, 20)
        assert.equal(result, false)
    })

    //parrot_trouble(False, 12)	False
    it('Should be false if the parrot is not talking after 7 and before 20', () =>{
        const result = parrotTrouble(false, 12)
        assert.equal(result, false)
    })
})
