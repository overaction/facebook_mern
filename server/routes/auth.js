const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/',(req,res) => {
    res.send("Good?");
});

router.post('/signin', (req,res) => {
    const {name,email,password} = req.body;
    if(!email || !password) {
        return res.status(422).json({error: "please add email or password"})
    };
    User.findOne({email})
    .then((savedUser) => {
        if(savedUser)
            return res.status(422).json({error: "already exist"});
        const newUser = new User({
            name,
            email,
            password
        });
        newUser.save();
    })
})

module.exports = router;