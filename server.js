const express = require("express");
const routes = require("./routes/api")
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const logger = require("morgan")
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var db = require("./models");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/api/apiRoutes")(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
