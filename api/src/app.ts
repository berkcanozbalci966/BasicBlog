import { Request, Response } from "express";

const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')


// İmport Routes
const authRoute = require('../routes/auth')

app.get('/', (req:Request, res:Response) => {
    res.json({ "try": "1" })
})

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

// Route Middlewares
app.use('/api/user',authRoute)



mongoose.connect(process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => { console.log('connected DB') });

const PORT = 8000;

app.listen(PORT, () => { console.log(`server runnig on ${PORT}`) })