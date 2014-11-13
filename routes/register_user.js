var User = require('../models/user_model');
var authController = require('../lib/auth');

module.exports = function(app) {
  app.post('/users', function(req, res) {
    console.log(req.body);
    var user = new User({
      username: req.body.username,
      password: req.body.password
    });

    user.save(function(err, data) {
      if (err) return res.send(err);
      res.json({'jwt': user.generateToken(app.get('jwtSecret')), 'username': req.body.username});
    });
  });
  app.get('/users', authController.isAuthenticated, function(req, res) {
    res.json({'jwt': req.user.generateToken(app.get('jwtSecret'))});

  });
};
