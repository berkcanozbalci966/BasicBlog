const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

import { Request, Response } from 'express';
import {registerValidation} from '../src/Validation'


router.post('/register', async (req:Request, res:Response) => {
  
    console.log(req.body)
    const { error } = await registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { email, userName, password } = req.body;

    const emailExist = await User.findOne({ email });
    if (emailExist) return res.status(400).send("email already exist")
    
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)
    
    const user = new User({
        email,
        userName,
        password: hashPassword
    })

    try {
        const savedUser = await user.save()
        res.send(savedUser)
        
    } catch (err) {
        res.status(400).send(err)
    }

    
})


module.exports = router