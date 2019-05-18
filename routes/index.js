const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const AddBPStats = require('../models/AddBPStats');

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

router.post('/AddBPStats',  ensureAuthenticated, (req, res) =>{

  const newAddBPStats = {
    breakfast: req.body.breakfast,
    lunch: req.body.lunch,
    dinner: req.body.dinner,
    night: req.body.night,
    notes: req.body.notes,
    userid: req.user.id

  }
  console.log(newAddBPStats);
  new AddBPStats(newAddBPStats)
  .save()
  .then(res.redirect('/dashboard'))

})

module.exports = router;
