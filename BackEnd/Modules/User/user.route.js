const router = require("express").Router();
const { login,signup } = require("./user.controller.js");
router.get("/login", login);
router.post("/signup", signup);
module.exports = router;
