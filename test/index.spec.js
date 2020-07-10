const expect = require("chai").expect;
const { capitalize, reverseString, randomNumber } = require("../index");

describe("capitalize function", function() {
  it("should capitalize first letter of a string", () => {
    const result = capitalize("flavio");
    expect(result).to.have.lengthOf(6)
    expect(result).to.equal("Flavio");
});

  it("should return empty string if the value passed is not a string", () => {
    const result = capitalize({});
    expect(result).to.have.lengthOf(0);
    expect(result).to.equal("");
  });
});

describe("reverseString function", function() {
    it("should reverse the string", () => {
      const result = reverseString("hello");
      expect(result).to.have.lengthOf(5);
      expect(result).to.equal("olleh");
    });
});

describe("returns a random integer", function() {
  it("returns a random integer in between first and second argument", () => {
    const result = randomNumber(2, 7);
    expect(result).to.be.a("number")
  })
})