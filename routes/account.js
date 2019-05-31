const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const { ensureAuthenticated } = require('../config/auth');

router.get('/signup', (req, res) =>{
  res.render('signup');

})

router.post('/signup', (req, res) =>{
  const { firstName, lastName, email, password, confirmPassword, gender, age, condtion, height, weight } = req.body;
  let errorMsgs = [];

  if(!firstName || !lastName || !email || !password || !confirmPassword){
    errorMsgs.push({ msg: 'Please enter all fields'});
  }

  if(password != confirmPassword){
    errorMsgs.push({ msg: 'Passwords do not match'});
  }

  if(password.length < 6 ){
    errorMsgs.push({ msg: 'Password needs to be longer than 6 characters'});
  }

  if (errorMsgs.length > 0 ){
    res.render('signup', {
      errorMsgs,
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    })
  } else {
    User.findOne({ email: email })
    .then(user => {
      if(user) {
        errorMsgs.push({ msg: 'User already exists'});
        res.render('signup', {
          errorMsgs,
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          gender,
          age,
          condition,
          height,
          weight
        });
      } else {
        const newUser = new User ({
          firstName,
          lastName,
          email,
          password
        })

        bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newUser.password, salt, (err, hash) =>{
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
          .then(user => {
            req.flash('success_msg', 'Thanks for registering!');
            res.redirect('/account/home')
          })
          .catch( err => console.log(err));
        }
      ))
    }
  })
}
})

router.get('/home', (req, res) =>{
  res.render('home');
})

router.post('/home', (req, res, next ) => {
  passport.authenticate('local', {
    successRedirect: "/dashboard",
    failureRedirect: "/account/home",
    failureFlash: true
  })  (req, res, next)
})

router.post('/editProfile', ensureAuthenticated, (req, res) => {
  console.log(req.body);
  User.findById(req.user.id)
  .then(user => {
    if (user) {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.gender = req.body.gender;
      user.age = req.body.age;
      user.condition = req.body.condition;
      user.height = req.body.height;
      user.weight = req.body.weight;
      user.save()
      .then(user => {
        req.flash('success_msg', 'Changes Saved!')
        res.redirect('/profile');
      })
      .catch(err => console.log(err));
    }

  })
})

module.exports = router;
