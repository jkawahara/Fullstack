// var db = require("../models");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");
// const axios = require("axios");
const router = require("express").Router();
const lessonsController = require("../controllers/lessonsController");
const classesController = require("../controllers/classesController");
const usersController = require("../controllers/usersController");
const db = require("../models");

router.route("/lessons")
  .get(lessonsController.findAll);

router.route("/classes")
  .get(classesController.findAll);

router.route("/users")
  .get(usersController.findAll);

router.route("/lesson/react/:id")
  .get(lessonsController.findOne)

module.exports = router;

//     // If the user has valid login credentials, send them to the members page.
//     app.post("/login", passport.authenticate("local"), function(req, res) {
//       res.json("/user");
//     });

//     app.get("/user", isAuthenticated, function(req, res) {
//       // res.sendFile(path.join(__dirname, "../public/user-page.html"));
//       res.json(res)
//     });

//     app.post("/signup", function(req, res) {
//       db.User.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//       })
//         .then(function(data) {
//           console.log("added to database" + data)
//           res.redirect(307, "/api/login");
//         })
//         .catch(function(err) {
//           console.log(err);
//           res.json(err);
//           // res.status(422).json(err.errors[0].message);
//         });
//     });
// }
