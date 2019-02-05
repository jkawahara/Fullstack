const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const usersController = require("../controllers/usersController");

// API Routes
router.use("/api", apiRoutes)

router.route("/profile/:id")
  .get(usersController.findOne)

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

module.exports = router;
