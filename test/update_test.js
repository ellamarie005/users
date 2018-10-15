const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => done());
  });

  function assertName(operation, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === 'Alex');
        done();
      });
  };

  it('instance type using set n save', (done) => {
    // gotta set it and then save it. 2 steps
    joe.set('name', 'Alex');
    assertName(joe.save(), done);
  });

  it('model instance can update', (done) => {
    // will update and save immediately. 1 step
    assertName(joe.update({ name: 'Alex' }), done)
  });
  it('A Model can update', (done) => {
    assertName(User.update({name: 'Joe'}, {name: 'Alex'}), done);
    
  });
  it('A Model can findOneAndUpdate', (done) => {
    assertName(User.findOneAndUpdate({name: 'Joe'}, {name: 'Alex'}), done);
  });
  it('A Model can findByIdAndUpdate', (done) => {
    assertName(User.findByIdAndUpdate(joe._id, {name: 'Alex'}), done);
  });

});
