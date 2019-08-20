/* eslint-disable no-unused-vars */
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE THIRDPARTY-MODULES DEPENDENCY.                                            │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const chai = require('chai');

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DESTRUCTURING DEPENDENCIES.                                                       │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const { expect } = chai;

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE MY-MODULES DEPENDENCIES.                                                  │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const calculator = require('../fixtures/calculator');

describe('Calcultator tests using EXPECT interface from CHAI module: ', () => {
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
    it('Check the returned value using: expect(value).to.equal(value): ', () => {
      const result = calculator.sum(2);
      expect(result).to.equal(4);
    });
    it("Check the returned value using: expect(value).to.be.a('value'): ", () => {
      const result = calculator.sum(2);
      expect(result).to.be.a('number');
    });
  });

  describe('Check addTested Function: ', () => {
    it("Check the returned value using: expect(value).to.equal('value'): ", () => {
      const result = calculator.addTested('text');
      expect(result).to.equal('text tested');
    });
    it("Check the returned value using: expect(value).to.be.a('value')): ", () => {
      const result = calculator.addTested('text');
      expect(result).to.be.a('string');
    });
    it('Check the returned value using: expect(value).to.have.lengthOf(value): ', () => {
      const result = calculator.addTested('text');
      expect(result).to.have.lengthOf(11);
    });
  });
});
