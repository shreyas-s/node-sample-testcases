
const request = require('supertest');
const routeApp = require('./../index');
const expect = require('expect');

describe('GET /user', function() {
    it('responds with json', function(done) {
      request(routeApp)
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200).
        then(response=>{
            expect(response.body.name).toBe('Ram') 
            done();
           // done to be triggered whenever working with requests - async
        })
    });
  });