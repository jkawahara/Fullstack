const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// Lesson Route
router.use("/lesson", apiRoutes);

module.exports = router;
