const express = require("express")
const Student = require("../model/studentModel")
const { body, validationResult } = require('express-validator');
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const student = await Student.find().lean().exec()
        return res.status(200).send({ student: student })
    }
    catch (err) {
        return res.status(500).send({ message: err.message })
    }
})

router.post("/",
    body("name").isLength({ min: 5 }).withMessage("Name should be greater than 5 char"),
    body("email").isEmail().withMessage("Put Valid Email"),
    body("mobileno").isLength({ min: 10, max: 10 }).withMessage("Mobile no. must be 10 digits"), async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const student = await Student.create(req.body)

            return res.status(201).send({ message: "Successfully Created !", student })
        }
        catch (err) {
            return res.status(500).send({ message: err.message })
        }
    })
module.exports = router