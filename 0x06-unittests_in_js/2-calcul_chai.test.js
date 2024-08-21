const expect = require("chai").expect;
const { describe, it } = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function() {
    describe("SUM", function() {
        it("should return the sum of rounded numbers when both are positive integers", function() {
            expect(calculateNumber("SUM", 3, 7)).to.equal(10);
        });
        it("should return the sum of rounded numbers when both are positive floats", function() {
            expect(calculateNumber("SUM", 2.3, 3.8)).to.equal(6);
        });
        it("should return the sum of rounded numbers when one is negative", function() {
            expect(calculateNumber("SUM", -2.6, 3.4)).to.equal(0);
        });
    });
    describe("SUBTRACT", function() {
        it("should return the difference of rounded numbers when both are positive", function() {
            expect(calculateNumber("SUBTRACT", 8.7, 4.3)).to.equal(5);
        });
        it("should return the difference of rounded numbers when one is positive and one is negative", function() {
            expect(calculateNumber("SUBTRACT", -1.5, 2.8)).to.equal(-4);
        });
        it("should return the difference of rounded numbers when both are negative", function() {
            expect(calculateNumber("SUBTRACT", -3.6, -1.4)).to.equal(-3);
        });
    });
    describe("DIVIDE", function() {
        it("should return the division of rounded numbers when both are positive integers", function() {
            expect(calculateNumber("DIVIDE", 9, 3)).to.equal(3);
        });
        it("should return the division of rounded numbers when both are positive floats", function() {
            expect(calculateNumber("DIVIDE", 5.5, 2.2)).to.equal(3);
        });
        it("should return 'Error' when dividing by zero", function() {
            expect(calculateNumber("DIVIDE", 7, 0)).to.equal("Error");
        });
        it("should return the division of rounded numbers when one is negative", function() {
            expect(calculateNumber("DIVIDE", -7.4, 2.1)).to.equal(-3.5);
        });
    });
});

