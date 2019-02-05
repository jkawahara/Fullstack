const passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");
// const axios = require("axios");
const router = require("express").Router();
const lessonsController = require("../controllers/lessonsController");
const classesController = require("../controllers/classesController");
const usersController = require("../controllers/usersController");
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

router.route("/thisUserLessons/:id")
  .get(lessonsController.loadUser) 

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
  .post(passport.authenticate("local"), (req, res) => {
    res.json("/api/profile")
  })
  .get(isAuthenticated, (req, res) => {
    if (req.user) {
      res.redirect("/api/profile/" + req.user.id)
    }
    res.redirect("api/signup");
  })

router.route("/logout")
  .get(function (req, res) {
    req.logout();
    res.redirect("/");
  })

module.exports = router;
