// process.env.NODE_ENV = 'test';

// const chai = require('chai');
// const should = chai.should();
// const chaiHttp = require('chai-http');
// const passportStub = require('passport-stub');

// const server = require('../app');
// const knex = require('../db/users_connection');

// chai.use(chaiHttp);
// passportStub.install(server);


// describe('API Routes', function() {

//   beforeEach(function() {
//     return knex.migrate.rollback()
//       .then(function() {
//         return knex.migrate.latest();
//       })
//       .then(function() {
//         return knex.seed.run();
//     });
//   });

//   afterEach(() => {
//     passportStub.logout();
//     return knex.migrate.rollback();
//   });


//     describe('GET /api/v1/scheduleAll', function() {
//         it('should return all schedules', function(done) {
            
//             chai.request(server)
//             .get('/api/v1/schedulesAll')
//             .end(function(err, res) {
//                 res.should.have.status(200);
//                 res.should.be.json; // jshint ignore:line
//                 res.body.should.be.an('array');
//                 res.body.length.should.equal(2);

//                 res.body[0].should.have.property('username');
//                 res.body[0].name.should.equal('juliusreade');

//                 res.body[0].should.have.property('schedule_id');
//                 res.body[0].channel.should.equal('223456789');

//                 res.body[0].should.have.property('updates_id');
//                 res.body[0].genre.should.equal('22345678');

//                 res.body[0].should.have.property('tags_id');
//                 res.body[0].rating.should.equal('22345');

//                 res.body[0].should.have.property('schedule_title');
//                 res.body[0].explicit.should.equal('When React/Redux Finally Makes Sense!');

//                 res.body[0].should.have.property('schedule_summary');
//                 res.body[0].explicit.should.equal('My fourth attempt at my application and by-far my longest. Still so much to learn!');

//                 res.body[0].should.have.property('schedule_url');
//                 res.body[0].explicit.should.equal('when-react-redux-finally-makes-sense');

//                 res.body[0].should.have.property('schedule_start_date');
//                 res.body[0].explicit.should.equal('2017-03-17');


//                 res.body[1].should.have.property('username');
//                 res.body[1].name.should.equal('juliusreade');

//                 res.body[1].should.have.property('schedule_id');
//                 res.body[1].channel.should.equal('123456789');

//                 res.body[1].should.have.property('updates_id');
//                 res.body[1].genre.should.equal('12345678');

//                 res.body[1].should.have.property('tags_id');
//                 res.body[1].rating.should.equal('98765');

//                 res.body[1].should.have.property('schedule_title');
//                 res.body[1].explicit.should.equal('Learning Schedule V3 begins');

//                 res.body[1].should.have.property('schedule_summary');
//                 res.body[1].explicit.should.equal('My third attempt at building learning schedule. Learnt a heap of stuff, or so they tell me');

//                 res.body[1].should.have.property('schedule_url');
//                 res.body[1].explicit.should.equal('learning-schedule-v3-begins');

//                 res.body[1].should.have.property('schedule_start_date');
//                 res.body[1].explicit.should.equal('2017-02-16');
//                 done();
//             }); 
//         });
//     });



// });

