const LocalStrategy = require ('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

module.exports = function(passport){
  passport.use(
    new LocalStrategy({ usernameField: 'email'}, (email, password, done) =>{ //Won't let user log in if they haven't signed up with that email
      User.findOne({
        email: email
      }).then(user =>{
        if(!user){
          return done(null, false, { message: 'That email is not registered'});
        }
        bcrypt.compare(password, user.password, (err, isMatch) => { //Recognises if the password doesn't fit and gives error
          if(err) throw err;
          if(isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password wrong'});
          }
        })
      })
    })
  )
  passport.serializeUser(function ( user, done){
    done(null, user.id)
  })

  passport.deserializeUser(function ( id, done){
    User.findById(id, function(err,user){
      done(err,user);
    })
  })
}
