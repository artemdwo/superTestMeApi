const request = require('supertest')('http://dummy.restapiexample.com/api/v1')
const chai = require('chai')
const expect = chai.expect
const should = chai.should()

chai.use(require('chai-arrays'))
chai.use(require('chai-json'))
chai.use(require('chai-like'))

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

  context('over /employee/{id} endpoint where id = 9999999', () => {
    it('returns FALSE when a record does not exist', (done) => {
      request
      .get('/employee/9999999')
      .expect(200)
      .expect('false',done)
    })
  })
})

describe('Method POST', () => {
  context('over /create endpoint', () => {
    
    const employee = {
      name: 'Jonny Doe',
      salary: '0.11',
      age: '199'
    }

    it('returns created record with it\'s id prop', (done) => {
      request
      .post('/create')
      .send(employee)
      .expect(200)
      .end((err, result) => {
        if (err) done(err)

        let response = JSON.parse(result.text)
        response.should.like(employee)
        expect(response).to.have.property('id')
        done()
      })
    })
  })
})
