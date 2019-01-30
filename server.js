const express = require("express");
const routes = require("./routes")
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const logger = require("morgan")
var db = require("./models");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json);
app.use(routes);

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
