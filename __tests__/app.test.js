const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('should GET hi', async() => {
    const res = await request(app)
      .get('/');
    expect(res.text).toEqual('hi');
  });

  it('should POST status code 200 in plain texts with request body ', async() => {
    const res = await request(app)
      .post('/echo')
      .send('hi');
    expect(res.text).toEqual('hi');
  });

  it('should return Header that reads red', async() => {
    const res = await request(app)
      .get('/red');
    expect(res.text).toEqual('<h1>red</h1>');

  });
  it('should return Header that reads green', async() => {
    const res = await request(app)
      .get('/green');
    expect(res.text).toEqual('<h1>green</h1>');

  });
  it('should return Header that reads blue', async() => {
    const res = await request(app)
      .get('/blue');
    expect(res.text).toEqual('<h1>blue</h1>');
  });
});
