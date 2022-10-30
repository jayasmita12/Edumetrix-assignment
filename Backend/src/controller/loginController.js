const express = require("express")
const validator = require("email-validator");
const { body, validationResult } = require('express-validator');
const LoginUser = require("../model/loginModel")
const router = express.Router()

router.post("/", 
body("password")
.not()
.isEmpty()
.isLength({ min: 8 }),async (req, res) => {
    try {
        
        const loginuser = await LoginUser.create(req.body)
        if (validator.validate(req.body.email)) {
            return res.status(201).send({ message: "Login Successfully !", loginuser })
        }
        else {
            return res.status(400).send({ message: "Error:Invalid email or Password" })
        }
    }
    catch (err) {
        return res.status(500).send({ message: "Sorry, There was a problem with your submission" })
    }
})

module.exports = router
