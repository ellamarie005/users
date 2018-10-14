const mongoose = require('mongoose');

// global.Promise is reference to the ES6 promise, which is what you would want to use
mongoose.Promise = global.Promise;

// difference from beforeEach is that before will only go through once
before((done) => {
  // on my present machine find this database
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

// hook = function that will be executed before any tet is executed in our test suite
// will need to call done(provided by mocha) so Mocha will know to do this before the test
// done is pretty much saying that 'hey when it is called then I am complete, go ahead and run the next test'
beforeEach((done) => {
  //delete all the data in the collections specified
  mongoose.connection.collections.users.drop(() => {
    // Ready to run the next test!
    done();
  });
})
