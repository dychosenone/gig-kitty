const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const token = require('../middleware/verify');


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
router.get("/userId/:id", token.authenticateToken, async (req, res) => {
  const id = req.params.id
  try {
    const user = await User.findOne({ _id: id });
    res.status(200).json(user);
  } catch(err) {
    res.status(500).json(err);
  }

});

// sample code to generate a token
router.get("/token", async (req, res) => {

  const data = {
    username: "helloworld",
    userId: "12345"
  }


  try {
    const generatedToken = await token.generateAccessToken(data);
    res.status(200).json({token : generatedToken});
  } catch (err) {
    res.status(500).json(err);
  }
  

});

// sample code to validate a token
router.get("/validateToken", token.authenticateToken, async (req, res) => {

  res.status(200).json({validate: 'validated'})

})

router.get("/user/:username", async (req, res) => {
  const username = req.params.username
  console.log(username)
  try {
    res.status(200).json(user);
  } catch(err) {
    res.status(500).json(err);
  }

});

module.exports = router;