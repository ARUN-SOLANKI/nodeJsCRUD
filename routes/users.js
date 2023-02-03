var express = require("express");
var router = express.Router();
const {
  getUsers,
  addUsers,
  deleteUsers,
  updateUsers,
} = require("../controlers/users");

/* GET users listing. */
router.get("/getusers", function (req, res, next) {
  getUsers(req, res);
});

router.post("/addusers", function (req, res, next) {
  addUsers(req, res);
});

router.delete("/deleteusers/:name", function (req, res, next) {
  deleteUsers(req, res);
});
router.put("/updateusers/:name", function (req, res, next) {
  updateUsers(req, res);
});

module.exports = router;
