const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
app.use(cors());


const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:4200';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

app.post('/send-verification-email', (req, res) => {
    const { email } = req.body;

    const mailOptions = {
        from: EMAIL_USER,
        to: email,
        subject: 'Email Verification',
        text: 'Please click on the link below to verify your email address.',
        html: `<p>Please click on the <a href="${FRONTEND_URL}/verify?email=${email}">link</a> to verify your email address.</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).json({ message: 'Verification email sent!' });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
