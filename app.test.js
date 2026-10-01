const request = require('supertest');
const { describe, it, expect } = require('@jest/globals');
const app = require('./app');

describe('GET /', () => {
  it(`should return 'Hello ! I am a simple Express server running on Node.js.'`, async () => {
    const res = await request(app).get('/').expect(200);

    expect(res.text).toBe(
      'Hello ! I am a simple Express server running on Node.js.',
    );
  });
});
