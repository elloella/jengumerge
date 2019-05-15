const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
      type: String,
      required: true
  },
  lastName: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  },
  gender: {
    type: String,
    default: ""
  },
  age: {
    type: String,
    default: ""
  },
  condition: {
    type: String,
    default: ""
  },
  height: {
    type: String,
    default: ""
  },
  weight: {
    type: String,
    default: ""
  },
  date:{
      type: Date,
      default: Date.now
  }
})

const User = mongoose.model('User' , UserSchema);

module.exports = User;
