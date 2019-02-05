// *** Include Modules: passport
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    return res.redirect("/api/login");
  });

  app.get("/api/login", isAuthenticated, function (req, res) {
    console.log("authenticated");
    console.log(req.user)
    if (req.user) {
      return res.json("/profile/")
    }
    return res.json("/signup");
  })

  app.get("/logout", function(req, res) {
    req.logout();
    return res.json("You are logged out!");
  });
  app.get("/profile/", isAuthenticated, function(req, res) {
    if (req.user) {
      return res.json(req.user)
    }
    return res.json("/signup");
  })
  app.get("/profile/:id", isAuthenticated, function(req, res) {
    console.log(req.user)
    db.User
    .findOne({ where: { id: req.params.id } })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})
  app.get("/profile/class/:id", isAuthenticated, function(req, res) {
    db.Class
    .findOne({
      where: {
        id: req.params.id
      },
      include: [
        db.Lesson
      ]
    })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  })

};
