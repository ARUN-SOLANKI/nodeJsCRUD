var express = require("express");
var router = express.Router();

var userRouter = require("./users");

router.use("/users", userRouter);

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
