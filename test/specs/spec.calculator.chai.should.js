/* eslint-disable no-unused-vars */
//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE THIRDPARTY-MODULES DEPENDENCY.                                            │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const chai = require('chai');

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ DESTRUCTURING DEPENDENCIES.                                                       │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const should = chai.should();

//  ┌───────────────────────────────────────────────────────────────────────────────────┐
//  │ REQUIRE MY-MODULES DEPENDENCIES.                                                  │
//  └───────────────────────────────────────────────────────────────────────────────────┘
const calculator = require('../fixtures/calculator');

describe('Calcultator tests using SHOULD interface from CHAI module: ', () => {
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
    it('Check the returned value using: value.should.equal(value): ', () => {
      const result = calculator.sum(2);
      result.should.equal(4);
    });
    it("Check the returned value using: value.should.be.a('value'): ", () => {
      const result = calculator.sum(2);
      result.should.be.a('number');
    });
  });

  describe('Check addTested Function: ', () => {
    it('Check the returned value using: value.should.equal(value): ', () => {
      const result = calculator.addTested('text');
      result.should.equal('text tested');
    });
    it("Check the returned value using: value.should.be.a('value'): ", () => {
      const result = calculator.addTested('text');
      result.should.be.a('string');
    });
    it('Check the returned value using: expect(value).to.have.lengthOf(value): ', () => {
      const result = calculator.addTested('text');
      result.should.have.lengthOf(11);
    });
  });
});
