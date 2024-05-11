const chai = require("chai");
const expect = chai.expect;

const manipulator = require('../funcs/class')

describe('Manipulator', function() {
    it('Correctly multiplies the number', function() {
        let five = new manipulator(10)
        expect(five.multiply(3)).to.deep.equal(30)
    })

    it('Correctly add to the number', function() {
        let five = new manipulator(10) 
        expect(five.addition(3)).to.deep.equal(13)
    })

    it('Correctly subtracts from the number', function() {
        let sub = new manipulator(10) 
        expect(sub.subtraction(2)).to.deep.equal(8)
    })

    it('Correctly divides the number', function() {
        let div = new manipulator(10) 
        expect(div.division(2)).to.deep.equal(5)
    })
})