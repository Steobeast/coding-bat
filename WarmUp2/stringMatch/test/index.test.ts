import { assert } from "chai";
import { stringMatch } from "../src";

describe("stringMatch", () => {
  it("Should compare 2 strings and return the number of matching 2 substring charatures", () => {
    const result = stringMatch("xxcaazz", "xxbaaz");
    assert.equal(result, 3);
  });

  it("Should compare 2 very short strings", () => {
    const result = stringMatch("abc", "abc");
    assert.equal(result, 2);
  });

  it("Should compare 2 letter strings with 1 matching pair", () => {
    const result = stringMatch("aa", "aa");
    assert.equal(result, 1);
  });

  it("Should compare 2 letter strings with 0 matching pair", () => {
    const result = stringMatch("ab", "ac");
    assert.equal(result, 0);
  });

  it("Should compare 3 letter strings with 0 matching pair", () => {
    const result = stringMatch("axc", "abc");
    assert.equal(result, 0);
  });
});
