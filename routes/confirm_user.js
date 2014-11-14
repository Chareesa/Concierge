var User = require('../models/user_model');
var authController = require('../lib/auth');

module.exports = function(app, jwtauth) {
  app.post('/confirm', jwtauth, function(req, res) {
    var confirmation = {confirmed: true};
    User.findOneAndUpdate({'_id': req.user._id, 'confirmationCode': confirmation}, confirmation, {upsert: true, new: true}, function(err, data) {
      if (err) return res.status(500).json(err);
      return res.status(202).json(data);
    });
  });
  app.get('/confirm', jwtauth, function(req, res) {
    newJob.find({}, function(err, data) {
      if (err) return res.status(500).send(err);
      res.json(data);
    });
  });
};
