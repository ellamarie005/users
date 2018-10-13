const mongoose = require('mongoose');
// Schema is being pulled from mongoose
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // String is a global variable on Schema that we have access to
  name: String
});

// saying hey mongo do you have a collection called User.. no? ok please make it
// the UserSchema parameter is what the user collection will have
// User will represent the whole data in User
const User = mongoose.model('user', UserSchema);

module.exports = User;
