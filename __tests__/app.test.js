const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
    it('handles the / route', () => {
        return request(app)
            .get('/')
            .then(res => {
                //res.body -> json
                //res.body -> text
                expect(res.text).toEqual('Hello!');
         });
    })
});
