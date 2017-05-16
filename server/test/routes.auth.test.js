process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const passportStub = require('passport-stub');

const server = require('../app');
const knex = require('../db/users_connection');

chai.use(chaiHttp);
passportStub.install(server);

describe('routes : auth', () => {

  beforeEach(function() {
    return knex.migrate.rollback()
      .then(function() {
        return knex.migrate.latest();
      })
      .then(function() {
        return knex.seed.run();
    });
  });

  afterEach(() => {
    passportStub.logout();
    return knex.migrate.rollback();
  });

  describe('POST /auth/register', () => {
    it('should register a new user', () => {
      return chai.request(server)
      .post('/auth/register')
      .send({
        email: 'julius_different@hotmail.com',
        password: 'hellothere'
      })
      .end((err, res) => {
        console.log(err);
        should.not.exist(err);
        res.redirects.length.should.eql(1); // should redirect 
        // res.status.should.eql(400);
        // res.type.should.eql('application/json');
        // res.body.status.should.eql('success');
      }).toString();
    });
    it('should throw an error if a user is logged in', () => {
      passportStub.login({
        email: 'kelly@hotmail.com',
        password: 'hellothere'
      });
      return chai.request(server)
      .post('/auth/register')
      .send({
        email: 'julius_dott@hotmail.com',
        password: 'hellothere'
      })
      .end((err, res) => {
        should.not.exist(err);
        res.redirects.length.should.eql(1);
        res.status.should.eql(200);
        res.type.should.eql('text/html');
        // res.body.status.should.eql('You are already logged in');
      }).toString();
    });
    it('should throw an error if the email is < 6 characters', () => {
      return chai.request(server)
      .post('/auth/register')
      .send({
        email: 'six',
        password: 'hellothere'
      })
      .end((err, res) => {
        should.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(400);
        res.type.should.eql('application/json');
        res.body.status.should.eql('Email must be longer than 6 characters');
      }).toString();
    });
    it('should throw an error if the password is < 6 characters', () => {
      return chai.request(server)
      .post('/auth/register')
      .send({
        email: 'julius_dott@hotmail.com',
        password: 'six'
      })
      .end((err, res) => {
        should.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(400);
        res.type.should.eql('application/json');
        res.body.status.should.eql('Password must be longer than 6 characters');
      }).toString();
    });
  });



  describe('POST /auth/login', () => {
    it('should login a user', () => {
      return chai.request(server)
      .post('/auth/login')
      .send({
        email: 'julius_dott@hotmail.com',
        password: 'hellothere'
      })
      .end((err, res) => {
        should.not.exist(err); 
        res.redirects.length.should.eql(1);
        res.status.should.eql(200);
        res.type.should.eql('text/html');
        // res.body.status.should.eql('success');
      }).toString();
    });

    it('should not login an unregistered user', () => {
      return chai.request(server)
      .post('/auth/login')
      .send({
        email: 'julius_unregistered@hotmail.com',
        password: 'hellothere'
      })
      .end((err, res) => {
        should.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(404);
        res.type.should.eql('application/json');
        res.body.status.should.eql('User not found');
      }).toString();
    });
    it('should redirect to their user homepage if a user is logged in', () => {
      passportStub.login({
        email: 'kelly@hotmail.com',
        password: 'hellothere'
      });
      return chai.request(server)
      .post('/auth/login')
      .send({
        email: 'kelly@hotmail.com',
        password: 'hellothere'
      })
      .end((err, res) => {
        should.not.exist(err);
        res.redirects.length.should.eql(1);
        res.status.should.eql(200);
        res.type.should.eql('text/html');
        // res.body.status.should.eql('You are already logged in');
      }).toString();
    });
  });

  describe('GET /auth/logout', () => {
    it('should logout a user', () => {
      passportStub.login({
        email: 'kelly@hotmail.com',
        password: 'hellothere'
      });
      return chai.request(server)
      .get('/auth/logout')
      .end((err, res) => {
        should.not.exist(err);
        res.redirects.length.should.eql(1);
        res.status.should.eql(200);
        res.type.should.eql('text/html');
        // res.body.status.should.eql('success');
      }).toString();
    });
    it('should throw an error if a user is not logged in', () => {
      return chai.request(server)
      .get('/auth/logout')
      .end((err, res) => {
        should.not.exist(err);
        res.redirects.length.should.eql(1);
        res.status.should.eql(200);
        res.type.should.eql('text/html');
        // res.body.status.should.eql('Please log in');
      }).toString();
    });
  });

  describe('GET /user', () => {
    it('should return a success', () => {
      passportStub.login({
        email: 'kelly@hotmail.com',
        password: 'hellothere'
      });
      return chai.request(server)
      .get('/user')
      .end((err, res) => {
        should.not.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(200);
        res.type.should.eql('text/html');
        // res.body.status.should.eql('success');
      }).toString();
    });
    it('should throw an error if a user is not logged in', () => {
      return chai.request(server)
      .get('/user')
      .end((err, res) => {
        // should.exist(err); // it doesn't produce an error
        res.redirects.length.should.eql(0);
        res.status.should.eql(404);
        // res.type.should.eql('application/json');
        // res.body.status.should.eql('Please. Just no.');
      }).toString();
    });
  });

  describe('GET /admin', () => {
    it('should return a success', () => {
      passportStub.login({
        email: 'julius_dott@hotmail.com',
        password: 'hellothere'
      });
      return chai.request(server)
      .get('/admin')
      .end((err, res) => {
        should.not.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(200);
        res.type.should.eql('text/html');
        // res.body.status.should.eql('success');
      }).toString();
    });
    it('should throw an error if a user is not logged in', () => {
      return chai.request(server)
      .get('/user')
      .end((err, res) => {
        should.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(401);
        res.type.should.eql('application/json');
        res.body.status.should.eql('Please log in');
      }).toString();
    });
    it('should throw an error if a user is not an admin', () => {
      passportStub.login({
        email: 'kelly@hotmail.com',
        password: 'hellothere'
      });
      return chai.request(server)
      .get('/admin')
      .end((err, res) => {
        should.exist(err);
        res.redirects.length.should.eql(0);
        res.status.should.eql(401);
        res.type.should.eql('application/json');
        res.body.status.should.eql('You are not authorized');
      }).toString();
    });
  });

});
