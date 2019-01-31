const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// API Routes
router.use("/api", apiRoutes);

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

// If no API routes are hit, send the React app
// router.get(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;
