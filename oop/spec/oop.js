const assert = require('chai').assert;
const { Manager, Employee } =  require('../src/oop');

console.log((new Employee('Janitor',null,'f', 1960).speak()));

describe('Manager', () => {
  const mrJohnson = new Manager('Johnson', 'male', 1997);
  it('should return 20 for mrJohnson.age', () => {
    assert.equal(mrJohnson.age, 20);
  });

  it(`should return I'm Mr Johnson, and I'm your your boss for mrJohnson.speak()`, () => {
    assert.equal(mrJohnson.speak(), `I'm Mr Johnson, and I'm your your boss`);
  });

  it(`should return male for mrJohnson.sex`, () => {
    assert.equal(mrJohnson.sex, 'male');
  });
});

describe('Employee', () => {
  const mrsJanitor = new Employee('Janitor',null,'f', 1960);
  it('should return 57 for mrsJohnson.age', () => {
    assert.equal(mrsJanitor.age, 57);
  });

  it(`should return hello my name is Janitor, I'm an employee here for mrsJanitor.speak()`, () => {
    assert.equal(mrsJanitor.speak(), `hello my name is Janitor, I'm an employee here`);
  });

  it(`should return f for mrsJanitor.sex`, () => {
    assert.equal(mrsJanitor.sex, 'f');
  });
});