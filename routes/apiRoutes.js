const passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");
// const axios = require("axios");
const router = require("express").Router();
const lessonsController = require("../controllers/lessonsController");
const classesController = require("../controllers/classesController");
const usersController = require("../controllers/usersController");
const authenticationController = require("../controllers/authenticationController");
const db = require("../models");

router.route("/lessons")
  .get(lessonsController.findAll)
  .post(lessonsController.create);

router.route("/lesson/react/:id")
  .get(lessonsController.findOne);

router.route("/lessons/:id")
  .get(lessonsController.findById)
  .put(lessonsController.update)
  .delete(lessonsController.delete);

router.route("/classes")
  .get(classesController.findAll)
  .post(classesController.create);

router.route("/classes/:id")
  .get(classesController.findById)
  .put(classesController.update)
  .delete(classesController.delete);

router.route("/users")
  .get(usersController.findAll)
  .post(usersController.create);

router.route("/users/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.delete);

router.route("/login")
  .post(passport.authenticate("local"), function (req, res) {
    res.redirect("/api/login")
  })
  .get(isAuthenticated, function (req, res) {
    console.log("authenticated")
    //one problem here is we don't want to redirect user to an api route, we want to redirect to their profile, but all the routes here are prepended with api/
    res.redirect("/userprofile/" + req.user.id)
  })
router.route("/logout")
  .get(function (req, res) {
    req.logout();
    res.redirect("/");
  })

// router.route("/signup")
//   .post(usersController.create);

// router.route("/login")
//   .post(userCOntroller.findById)


module.exports = router;