/* eslint-disable no-unused-vars */
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE THIRDPARTY-MODULES DEPENDENCY.                                            │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const assert = require('assert');

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DESTRUCTURING DEPENDENCIES.                                                       │
//  └───────────────────────────────────────────────────────────────────────────────────┘

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE MY-MODULES DEPENDENCIES.                                                  │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const calculator = require('../fixtures/calculator');

describe('Calcultator tests using ASSERT module', () => {
  before(() => {
    // runs before all tests in this block
    const result = null;
  });
  after(() => {
    // runs after all tests in this block
  });
  beforeEach(() => {
    // runs before each test in this block
  });
  afterEach(() => {
    // runs after each test in this block
    const result = null;
  });

  describe('Check Sum Function: ', () => {
    it('Check the returned value using: assert.equal(value, value): ', () => {
      const result = calculator.sum(2);
      assert.equal(result, 4);
    });
    it("Check the returned value using: assert(typeof(value, 'value')): ", () => {
      const result = calculator.sum(2);
      assert(typeof result, 'number');
    });
  });

  describe('Check addTested Function: ', () => {
    it("Check the returned value using: assert.equal(value, 'value'): ", () => {
      const result = calculator.addTested('text');
      assert.equal(result, 'text tested');
    });
    it("Check the returned value using: assert(typeof(value, 'value')): ", () => {
      const result = calculator.addTested('text');
      assert.equal(typeof result, 'string');
    });
    it('Check the returned value using: assert.equal(value, value): ', () => {
      const result = calculator.addTested('text');
      assert.equal(result.length, 11);
    });
  });
});
