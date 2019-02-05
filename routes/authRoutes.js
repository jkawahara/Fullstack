// *** Include Modules: passport
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    return res.redirect("/api/login");
  });

  app.get("/api/login", isAuthenticated, function (req, res) {
    console.log("authenticated");
    if (req.user) {
      return res.redirect("/profile/" + req.user.id)
    }
    return res.redirect("/signup");
  })

  app.get("/logout", function(req, res) {
    req.logout();
    return res.redirect("/");
  });
};
