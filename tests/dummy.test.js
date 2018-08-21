const request = require('supertest')('http://dummy.restapiexample.com/api/v1')
const chai = require('chai')
const expect = chai.expect

describe('Method GET', function() {
  context('over /employees endpoint', function() {
    it('returns 200 when called', function(done) {
      request
        .get('/employees')
        .expect(200, done)
    })
  })
})
