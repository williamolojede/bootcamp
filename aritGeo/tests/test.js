const assert = require('chai').assert;
const app =  require('../src/main');

describe('aritGeo', () => {
  describe("handle valid input", () => {
    // empty array test
    it("should return 0 for an empty array([])", () => {
      assert.equal(app.determineProgressionType([]), 0);
    });

    // Arithmetic tests
    it("should return Arithmetic as the type of [2, 8, 14, 20, 26]", () => {
      assert.equal(app.determineProgressionType([2, 8, 14, 20, 26]), 'Arithmetic');
    });

    it("should return Arithmetic as the type of [9, 6, 3, 0, -3]", () => {
      assert.equal(app.determineProgressionType([9, 6, 3, 0, -3]), 'Arithmetic');
    });
    
   

    // Geometric tests
    it("should return Geometric as the type of [81, 27, 9, 3, 1]", () => {
      assert.equal(app.determineProgressionType([81, 27, 9, 3, 1]), 'Geometric');
    });

    it("should return Geometric as the type of [4, -2, 1, -0.5]", () => {
      assert.equal(app.determineProgressionType([4, -2, 1, -0.5]), 'Geometric');
    });

    // Neither
    it("should return -1 as the type of [2, 4, 16]", () => {
      assert.equal(app.determineProgressionType([2, 4, 16]), -1);
    });
    it("should return -1 as the type of [5, −10, 20, 40]", () => {
      assert.equal(app.determineProgressionType([5, -10, 20, 40]), -1);
    });
  });

  describe("handle invalid input", () => {
    it("should return undefined if argument passed isn't an array", () => {
      assert.equal(app.determineProgressionType(5), 'undefined');
    });

    it("should return undefined if argument passed isn't an array", () => {
      assert.equal(app.determineProgressionType('string'), 'undefined');
    });

    it("should return undefined if argument passed isn't an array", () => {
      assert.equal(app.determineProgressionType({}), 'undefined');
    });

    it("should return undefined if no argument is passed", () => {
      assert.equal(app.determineProgressionType(), 'undefined');
    });

    // it("should return undefined if an item in the array passed is not a number", () => {
    //   assert.equal(app.determineProgressionType([1, 'one']), 'undefined');
    // });
  });
});
