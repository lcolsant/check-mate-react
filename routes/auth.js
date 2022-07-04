const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


// @route     POST api/auth
// @desc      Login a user
// @access    Private

router.post('/', async (req, res)=> {

    const { email, password } = req.body;

    try{
        const user = await User.findOne({email});
    
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const result = await bcrypt.compare(password,user.password);
    
        if(!result){
            return res.status(400).json('err: Passwords do not match.')
        }

        const payload = {
            user: {
            id: user.id,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {
              expiresIn: 360000,
            },
            (err, token) => {
              if (err) throw err;
              res.json({ token });
            }
          );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }

    });



module.exports = router;