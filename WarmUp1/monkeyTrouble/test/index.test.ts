import { assert } from "chai"
import { monkeyTrouble } from "../src"

describe("It should Tell us whether we need to run from the Monkeys (true) or not (false)", () => {
    it("Should read True if both monkeys are smiling", () => {
        const result = monkeyTrouble(true, true)
        assert.equal(result, true )
    })
    it("Should read True if both monkeys are not smiling", () => {
        const result = monkeyTrouble(false, false)
        assert.equal(result, true )
    })
    it("Should read False if only monkey a issmiling", () => {
        const result = monkeyTrouble(true, false)
        assert.equal(result, false )
    })
    it("Should read false if only monkey b is smiling", () => {
        const result = monkeyTrouble(false, true)
        assert.equal(result, false )
    })

    })