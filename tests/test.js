const supertest = require('supertest'); 
const test = require('unit.js');
const app = require('../app.js');

const request = supertest(app);

describe('Initialize Firebase App', function() {
  it('Check User Collections', (done)=> {
    request.get('/api/user/').expect(200).end((err, response)=> {   
      test.must(response.body.result.code).be.a.number();
      test.value(response.body.result.status).contains('success');
      test.value(response).hasHeader('content-type', 'application/json; charset=utf-8');
      done();
    });
  });
});
