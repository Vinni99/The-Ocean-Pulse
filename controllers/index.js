const router = require("express").Router();

// const apiRoutes = require("./api");
const HTMLRoutes = require("./HTMLRoutes");

router.use("/", HTMLRoutes);
// router.use("/api", apiRoutes);

module.exports = router;
