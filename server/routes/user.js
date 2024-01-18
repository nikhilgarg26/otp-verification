const express = require('express')
const User = require('../models/User')
const nodemailer = require('nodemailer');
const { generateRandomNumber } = require('../utils/randomNumber');
const router = express.Router()

// Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nikhil2212garg@gmail.com',
        pass: 'rbox evai qcsg larq', // Use the app password generated in Step 1
    },
});

// Routes
router.post('/email', async (req, res) => {
    const body = req.body
    const email = body.email

    if (!email) return res.json({ msg: "Provide email" })

    const otp = generateRandomNumber()

    const subject = "OTP for verification"
    const text = `The OTP for verification is ${otp}`
    const html = `The OTP for verification is ${otp}`

    console.log(email, otp, subject, text, html)
    const responseEmail = await transporter.sendMail({
        from: 'nikhil2212garg@gmail.com',
        to: email,
        subject,
        text,
    });

    if (!responseEmail.accepted.includes(email)) return res.json({ msg: "OTP not sent try again" })

    const user = new User({
        email,
        otp
    })

    await user.save()

    setTimeout(() => {
        User.findOneAndDelete({ email })
            .then(deletedUser => {
                console.log("Deleted", deletedUser);
            })
            .catch(error => {
                console.error("Error deleting user", error);
            });
    }, 60000, email)

    res.json({ msg: "OTP sent!!" })
})

router.post('/otp', async (req, res) => {
    const body = req.body
    const email = body.email

    if (!body.otp) return res.json({ msg: "Send OTP" })

    const user = await User.findOne({ email })

    if (!user) return res.json({ msg: "Expired or does not exist" })

    if (body.otp == user.otp) {
        return res.status(200).json({ msg: "Success" })
    }

    return res.json({ msg: "Incorrect OTP" })
})

module.exports = router