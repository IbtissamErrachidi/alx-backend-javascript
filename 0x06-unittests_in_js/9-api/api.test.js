const request = require('request');
const { describe, it } = require("mocha");
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('should return status 200', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const validUrl = 'http://localhost:7865/cart/12';
  const invalidUrl = 'http://localhost:7865/cart/hello';

  it('should return status 200 for numeric ID', (done) => {
    request(validUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status 404 for non-numeric ID', (done) => {
    request(invalidUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

