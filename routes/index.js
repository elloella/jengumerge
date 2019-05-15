const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res) =>{
  res.render('home');

})

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {
      firstName: req.user.firstName,
      lastName: req.user.lastName
    });
})

router.get('/profile',  ensureAuthenticated, (req, res) => {
  res.render('profile', {
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    gender: req.user.gender,
    age: req.user.age,
    condition: req.user.condition,
    height: req.user.height,
    weight: req.user.weight
  })
})

router.get('/logout', (req,res) => {
    req.logout();
    req.flash('success_msg', 'Successfully logged out');
    res.redirect('/account/home');
})

router.post('/AddBPStats', (req, res) =>{
  console.log(req.body);
  res.redirect('/dashboard');
})

module.exports = router;
