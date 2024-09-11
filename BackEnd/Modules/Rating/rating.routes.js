const router = require("express").Router();
const isAuth = require("../../middlewares/auth.js");

const { addRatingAndReview } = require("./rating.controller.js");

router.post("/add", isAuth(), addRatingAndReview);

module.exports = router;
