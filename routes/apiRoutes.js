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
  .get(lessonsController.findOneLesson);

router.route("/lessons/:id")
  .get(lessonsController.findOneId)
  .put(lessonsController.update)
  .delete(lessonsController.delete);

router.route("/thisUserLessons/:id")
  .get(lessonsController.loadUser) 

router.route("/classes")
  .get(classesController.findAll)
  .post(classesController.create);

router.route("/classes/:id")
  .get(classesController.findOne)
  .put(classesController.update)
  .delete(classesController.delete);

router.route("/users")
  .get(usersController.findAll)
  .post(usersController.create);

router.route("/users/:id")
  .get(usersController.findOne)
  .put(usersController.update)
  .delete(usersController.delete);

router.route("/profile")
  .get(usersController.findOneEmail)

router.route("/login")
  .post(passport.authenticate("local"), (req, res) => {
    console.log(req);
    res.json("/api/login")
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
