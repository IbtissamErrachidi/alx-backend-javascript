const assert = require('assert');
const { it, describe } = require("mocha");
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber()', function() {
  it('checking if numbers round', function() {
    const res = calculateNumber(1, 3);
    assert.strictEqual(res, 4);
  });

  it('checking if numbers round', function() {
    const res = calculateNumber(1, 3.7);
    assert.strictEqual(res, 5);
  });

  it('checking if numbers round', function() {
    const res = calculateNumber(1.2, 3.7);
    assert.strictEqual(res, 5);
  });

  it('checking if numbers round', function() {
    const res = calculateNumber(1.5, 3.7);
    assert.strictEqual(res, 6);
  });

  it('checking if numbers round', function() {
    const res = calculateNumber(0, 0);
    assert.strictEqual(res, 0);
  });

  it('checking if numbers round', function() {
    const res = calculateNumber(-1.6, -1.7);
    assert.strictEqual(res, -4);
  });

  it('checking if numbers round', function() {
    const res = calculateNumber(-1.4, 1.3);
    assert.strictEqual(res, 0);
  });
});

