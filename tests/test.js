var chai = require('chai'),
    expect = chai.expect,
    should = chai.should;

var twss_function = require('../index.js');

var parser = {
    is: function(phrase) {
        if (typeof phrase === 'string') {
            return true;
        } else {
            return undefined;
        }
    }
}

var test1 = twss_function(parser, 'is that what she said');
expect(test1).to.be.a('boolean').and.be.true;