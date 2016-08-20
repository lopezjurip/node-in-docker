'use strict';

const request = require('supertest');

const app = require('../src/app');


describe('loading express', function () {
  it('responds to /', function (done) {
    request(app)
      .get('/')
      .expect(200, done);
  })

  it('404 everything else', function (done) {
    request(app)
      .get('/foo/bar')
      .expect(404, done);
  })
})
