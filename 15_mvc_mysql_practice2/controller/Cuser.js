const User = require("../model/User");

exports.signup = (req, res) => {
  res.render("signup");
};

exports.postSignup = (req, res) => {
  User.postSignup(req.body, () => {
    res.end();
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.postSignin = (req, res) => {
  User.postSignin(req.body, (result) => {
    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

exports.postProfile = (req, res) => {
  User.postProfile(req.body.userid, (result) => {
    res.render("profile", { data: result[0] });
  });
};

exports.editProfile = (req, res) => {
  User.editProfile(req.body, () => {
    res.send(true);
  });
};

exports.deleteProfile = (req, res) => {
  User.deleteProfile(req.body.id, () => {
    res.send(true);
  });
};
