// @ts-check
var express = require("express");
var router = express.Router();
var LoginModel = require("../models/login");
var jwt = require("jsonwebtoken");

const SECRET = "ENTER_SECRET_HERE";

// Register
router.post("/register", function (req, res, next) {
  var user = new LoginModel({
    username: req.body.username,
    password: LoginModel.hashPassword(req.body.password),
    role: req.body.role,
  });

  let promise = user.save();
  promise.then(function (doc) {
    return res.status(201).json(doc);
  });

  promise.catch(function (err) {
    return res.status(501).json({ message: "Error registering user." });
  });
});

// Login
router.post("/login", function (req, res, next) {
  let promise = LoginModel.findOne({
    username: req.body.username,
    role: req.body.role,
  }).exec();

  promise.then(function (doc) {
    if (doc) {
      if (doc.isValid(req.body.password)) {
        let token = jwt.sign({ username: doc.username }, SECRET, {
          expiresIn: "3h",
        });
        return res.status(200).json(token);
      } else return res.status(501).json({ message: "Invalid Credentials" });
    } else {
      return res.status(501).json({ message: "User is not registered" });
    }
  });

  promise.catch(function (err) {
    return res.status(501).json({ message: "Some internal error" });
  });
});

var decodedToken;
router.get("/username", verifyToken, (req, res, next) => {
  return res.status(200).json(decodedToken.username);
});
function verifyToken(req, res, next) {
  let token = req.query.token;

  jwt.verify(token, SECRET, (err, tokenData) => {
    if (err) {
      return res.status(400).json({ message: "Unauthorized request" });
    }
    if (tokenData) {
      decodedToken = tokenData;
      next();
    }
  });
}
module.exports = router;
