const express = require('express');
const Task = require('../models/Task');
const router = express.Router();
const User = require('../models/Task');
const auth = require('../middleware/auth');

// @route     POST api/tasks
// @desc      Register a task
// @access    Private


router.post('/', auth, async (req, res)=>{
    console.log('got to task api post...')
    try{
        
        user = req.user.id
        console.log(user);

        const {description, completed} = req.body

        const task = new Task({
            user,
            description,
            completed
        });

        await task.save();

        const payload = {
          task: {
            id: task.id,
          },
        };

        res.status(200).json({payload})

    }catch(e){
        console.log(e);
        return res.status(500).json({err: 'Error with saving task'})
    }
    
    res.status(200).json({ msg: "it works!" });
});



module.exports = router;