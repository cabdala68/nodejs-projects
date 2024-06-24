const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator/check");

router.get("/", (req, res) => {
  res.render("form", { title: "Registration form" });
});
router.post(
  [
    body("name").isLength({ min: 1 }).withMessage("Please enter a name"),
    body("email").isLength({ min: 1 }).withMessage("Please enter an email"),
  ],
  (req, res) => {
    console.log(req.body);
    res.render("form", { title: "Registration form" });
  }
);
module.exports = router;
