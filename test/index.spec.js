const expect = require("chai").expect;
const { capitalize, reverseString } = require("../index");

describe('capitalize function', function() {
  it('should capitalize first letter of a string', () => {
    const result = capitalize("flavio");
    expect(result).to.have.lengthOf(6)
    expect(result).to.equal("Flavio");
});

  it('should return empty string if the value passed is not a string', () => {
    const result = capitalize({});
    expect(result).to.have.lengthOf(0);
    expect(result).to.equal("");
  });
});

describe('reverseString function', function() {
    it('should reverse the string', () => {
      const result = reverseString("hello");
      expect(result).to.have.lengthOf(5);
      expect(result).to.equal("olleh");
    });
});