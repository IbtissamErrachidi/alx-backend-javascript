const { describe, it, beforeEach, afterEach } = require("mocha");
const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function() {
    let stub;
    let spy;

    beforeEach(function() {
        stub = sinon.stub(Utils, "calculateNumber").returns(10);

        spy = sinon.spy(console, "log");
    });

    afterEach(function() {
        stub.restore();
        spy.restore();
    });

    it("should call calculateNumber with the correct arguments", function() {
        sendPaymentRequestToApi(100, 20);

        expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    });

    it("should log the correct message", function() {
        sendPaymentRequestToApi(100, 20);

        expect(spy.calledWith('The total is: 10')).to.be.true;
    });
});

