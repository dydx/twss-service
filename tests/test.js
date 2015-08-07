// still working on this stuff... :(

var chai = require('chai'),
    should = chai.should,
    expect = chai.expect;

describe('calling the api', function() {
    it('should return true', function() {
        expect('true').to.equal(1);
    });

    it('should be greater than 2', function() {
        expect(3).to.be.greaterThan(2);
    });
});