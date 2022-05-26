const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


// getting users
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = await User.findById(userId);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

//updating user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) 
    {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account has been updated");
        } catch (err) {
            return res.status(500).json(err);
      }
    } else 
        {
        return res.status(403).json("Not your account");
    }
});

//deleting user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json('Account has been deleted');
        } catch (err) {
            return res.status(500).json(err);
        }
        } else {
            return res.status(403).json("This isn't your account");
        }
});

//getting user
router.get("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const user = await User.findOne({ _id: id });
    res.status(200).json(user);
  } catch(err) {
    res.status(500).json(err);
  }

});

router.get("/user/:username", async (req, res) => {
  const username = req.params.username
  console.log(username)
  try {
    const user = await User.findOne({ username: username });
    res.status(200).json(user);
  } catch(err) {
    res.status(500).json(err);
  }

});



module.exports = router;
