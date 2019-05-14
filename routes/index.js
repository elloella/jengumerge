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

router.get('/profile', (req, res) => {
  res.render('profile')
})

router.get('/logout', (req,res) => {
    req.logout();
    req.flash('success_msg', 'Successfully Logged out');
    res.redirect('/account/home');
})



module.exports = router;
