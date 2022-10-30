const express = require("express")
const Agent = require("../model/agentModel")
const { body, validationResult } = require('express-validator');
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const agent = await Agent.find().lean().exec()
        return res.status(200).send({ agent: agent })
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
            const agent = await Agent.create(req.body)

            return res.status(201).send({ message: "Successfully Created !", agent })
        }
        catch (err) {
            return res.status(500).send({ message: err.message })
        }
    })
module.exports = router