const User = require('../model/User');

// GET /user
exports.user = (req, res) => {
  console.log(User.userInfo());
  res.render('user', { userInfo: User.userInfo() });
};
