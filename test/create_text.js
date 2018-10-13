// Describe lock/function is from Mocha
// call a function call Describe and will have 'it' blocks
// inside the 'it' function will have the code where we do the testing 
// assert is making sure that this value is equal to this value
const assert = require('assert');
// have to import in user.js file
const User = require('../src/user');

describe('Creating records', () => {
  // 'it' will tell the app that the project owner is trying to pass a test
  // make sure semi-colons are properly placed.
  it('saves a user', () => {
     const joe = new User({ name: 'Joe' });

     joe.save();
  });
});
