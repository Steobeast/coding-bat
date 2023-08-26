import { assert } from "chai";
import { stringSplosion } from "../src";

describe("stringSplosion()", () => {

  it("Should take a word and repeat each characture until the word has been spelt out", () => {
    const result = stringSplosion("Code");
    assert.equal(result, "CCoCodCode");
  });

  it("Should take short string repeat each characture until the word has been spelt out", () => {
    const result = stringSplosion("abc");
    assert.equal(result, "aababc");
  });

  it("Should take 2 letter string repeat each characture until the word has been spelt out", () => {
    const result = stringSplosion("ab");
    assert.equal(result, "aab");
  });

  it("Should test for a single letter", () => {
    const result = stringSplosion("a");
    assert.equal(result, "a");
  });
  
  it("Should take a long word and return it with each part of the word repeated", () => {
    const result = stringSplosion("explosion");
    assert.equal(result, "eexexpexplexploexplosexplosiexplosioexplosion");
  });
});
