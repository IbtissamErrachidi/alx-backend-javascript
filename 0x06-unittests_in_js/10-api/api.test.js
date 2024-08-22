const request = require('request');
const { describe, it } = require("mocha");
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
  const url = `${baseUrl}/`;

  it('should return status 200', (done) => {
    request(url, (error, response, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request(url, (error, response, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const validUrl = `${baseUrl}/cart/12`;
  const invalidUrl = `${baseUrl}/cart/hello`;

  it('should return status 200 for numeric ID', (done) => {
    request(validUrl, (error, response, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status 404 for non-numeric ID', (done) => {
    request(invalidUrl, (error, response, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available Payments page', () => {
  const url = `${baseUrl}/available_payments`;

  it('should return the correct payment methods object', (done) => {
    request(url, (error, response, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login page', () => {
  const url = `${baseUrl}/login`;

  it('should return welcome message for a valid username', (done) => {
    request.post({
      url: url,
      body: JSON.stringify({ userName: 'Betty' }),
      headers: { 'Content-Type': 'application/json' }
    }, (error, response, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should return error message for missing username', (done) => {
    request.post({
      url: url,
      body: JSON.stringify({}),
      headers: { 'Content-Type': 'application/json' }
    }, (error, response, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(response.statusCode).to.equal(400);
      expect(body).to.equal('Missing userName');
      done();
    });
  });
});

