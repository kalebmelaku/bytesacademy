require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const http = require('http');
const cors = require('cors');
const { all } = require('axios');
const app = express();
const { PrismaClient } = require('@prisma/client');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'seng',
});

// app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

const prisma = new PrismaClient();

//Routes
app.get('/', (req, res) => {
    res.json('This is backend');
});

app.post('/register', async (req, res) => {
    const { fname, lname, email, phone, course, education } = req.body;
    try {
        const user = await prisma.students.createMany({
            data: [
                {
                    fname: fname,
                    lname: lname,
                    email: email,
                    phone: phone,
                    course: course,
                    education: education
                }
            ]
        });
        res.status(200).json(user)
    } catch (err) { 
        console.log(err)
    }
});






async function main() {
    const user = await prisma.students.findMany();
    console.log(user);
}

main()
    .catch(e => {
        console.log(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });







app.post('/mail', (req, res) => {
    const { id } = req.body;
    let mailDetails = {
        from: '"Bytes Academy" <bytesacademy@hotmail.com>',
        to: id,
        subject: 'OTP Verification',
        text: `Your OTP for email verification is`
    };
    sendMail(mailDetails);
});


let mailTransporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});


function sendMail(mailDetails) {
    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('Email sent successfully');
        }
    });

}
app.listen(5000, () => {
    console.log('Connected to Backend');
});