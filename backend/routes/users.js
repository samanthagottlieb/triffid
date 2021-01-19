const {User} = require('../models/user.model');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.get(`/`, async (req, res) =>{
    const userList = await User.find().select('-passwordHash');

    if(!userList) {
        res.status(500).json({success: false})
    }
    res.send(userList);
})

router.post("/add", async(req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10)
  })
  user = await user.save();

  if(!user)
    return res.status(400).send('the user cannot be created!')

    res.send(user);
});

module.exports = router;
