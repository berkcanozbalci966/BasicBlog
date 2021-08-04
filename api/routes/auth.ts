const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

import { Request, Response } from 'express';
import {registerValidation,loginValidation} from '../src/Validation'


router.post('/register', async (req:Request, res:Response) => {
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
        await user.save()
        res.send("success")
        
    } catch (err) {
        res.status(400).send(err)
    }

    
})

router.post('/login', async (req: Request, res: Response) => {
    
    const { error } = await loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("email is not found");

    const validPass = await bcrypt.compare(password, user.password)
    if (!validPass) return res.status(400).send('Invalid Password')
    
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token',token).send(token)

    
})


module.exports = router