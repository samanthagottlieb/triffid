const User = require("../models/user.model");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).select("-passwordHash");
  // .select('-passwordHash') returns data when you call the api
  // without the passwordHash key: value

  if (!user) {
    res
      .status(500)
      .json({ message: "The user with the given ID was not found." });
  }
  res.status(200).send(user);
});

router.post("/add", async (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
  });
  user = await user.save();

  if (!user) return res.status(400).send("the user cannot be created!");

  res.send(user);
});

router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  const secret = process.env.secret;

  if (!user) {
    return res.status(400).send("The user not found");
  }

  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    const token = jwt.sign(
      {
        userId: user.id,
      },
      secret,
      { expiresIn: "4w" }
      // user gets logged out after 4 weeks. 1d would be 1 day
    );

    res.status(200).send({ user: user.email, token: token });
  } else {
    res.status(400).send("Incorrect password");
  }
});

module.exports = router;
