const router = require("express").Router();
const isAuth = require("../../middlewares/auth.js");
const { signup, login, confirmEmail } = require("./auth.controller.js");
router.get("/verify-email/:token", confirmEmail);
router.post("/signup", signup);
router.get("/login", login);
// router.logout("/logout", isAuth(), logout);

module.exports = router;
