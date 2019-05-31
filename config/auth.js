module.exports = { //Setting up authentication to ensure the user is logged in
    ensureAuthenticated: function (req, res, next) {
        if( req.isAuthenticated()){
            return next();
          } else {
            req.flash('error_msg', 'Not logged in');
            res.redirect('/account/home');
        }
    }
}
