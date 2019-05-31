const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const AddBSStats = require('../models/AddBSStats');
const AddBPStats = require('../models/AddBPStats');

router.get('/', (req, res) =>{
  res.render('home');

})

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      userID: req.user.id

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
    weight: req.user.weight,
    date: req.user.date
  })
})

router.get('/logout', (req,res) => {
    req.logout();
    req.flash('success_msg', 'Successfully logged out');
    res.redirect('/account/home');
})

router.post('/AddBSStats',  ensureAuthenticated, (req, res) =>{

  const newAddBSStats = {
    breakfast: req.body.breakfast,
    lunch: req.body.lunch,
    dinner: req.body.dinner,
    night: req.body.night,
    notes: req.body.notes,
    date: req.body.date,
    userid: req.user.id

  }
  console.log(newAddBSStats);
  new AddBPStats(newAddBSStats)
  .save()
  .then(res.redirect('/dashboard'))

})

router.get('/BSStats/:id', ensureAuthenticated, (req, res) => {

  AddBSStats.find({
    userid: req.params.id
  }, function (err, docs) {
    if (!err) {
      res.send(docs);
    } else {
      throw err;
    }
  });
})

router.post('/AddBPStats',  ensureAuthenticated, (req, res) =>{

  const newAddBPStats = {
    date: req.body.date,
    systolic: req.body.systolic,
    diastolic: req.body.diastolic,
    notes: req.body.notes,
    userid: req.user.id
  }
  console.log(newAddBPStats);
  new AddBPStats(newAddBPStats)
  .save()
  .then(res.redirect('/dashboard'))

})

router.get('/BPStats/:id', ensureAuthenticated, (req, res) => {

  AddBPStats.find({
    userid: req.params.id
  }, function (err, docs) {
    if (!err) {
      res.send(docs);
    } else {
      throw err;
    }
  });
})

module.exports = router;
