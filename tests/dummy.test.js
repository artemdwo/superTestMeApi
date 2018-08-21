const request = require('supertest')('http://dummy.restapiexample.com/api/v1')
const chai = require('chai')
const expect = chai.expect

chai.use(require('chai-arrays'))
chai.use(require('chai-json'))

describe('Method GET', function() {
  context('over /employees endpoint', function() {
    it('returns 200 when called', function(done) {
      request
        .get('/employees')
        .expect(200, done)
    })

    it('returns non-empty array of data', function(done) {
      request
        .get('/employees')
        .end(function (err, result) {
          if (err) done(err)

          let data = result.text
          expect(data).to.be.array
          expect(data).is.not.empty
          done()
        })
    })

    it('returns JSON', function(done) {
      request
        .get('/employees')
        .end(function (err, result) {
          if (err) done(err)

          expect(result).to.be.jsonObj
          done()
        })
    })
  })
})
