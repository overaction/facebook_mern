const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const User = mongoose.model('User');

const bcrypt = require('bcryptjs');

router.post('/signup', (req,res) => {
    const {name,email,password} = req.body;
    if(!email || !password) {
        return res.status(422).json({error: "please add email or password"})
    };
    User.findOne({email})
    .then((savedUser) => {
        if(savedUser)
            return res.status(422).json({error: "already exist"});
        bcrypt.hash(password,12)
        .then(hashed => {
            const newUser = new User({
                name,
                email,
                password: hashed
            });
            newUser.save()
            .then(user => {
                res.json({message: `saved successfully`});
            })
            .catch(err => {
                console.log(err);
            })
        })
    })
    .catch(err => console.log(err));
})

module.exports = router;