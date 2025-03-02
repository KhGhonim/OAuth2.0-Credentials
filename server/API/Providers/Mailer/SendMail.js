import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { HTML } from './Template/Mailer.js'

dotenv.config()

export const SendMail = (req, res) => {
  const { email } = req.body


  if (!email) {
    return res.status(400).json({ message: 'Email is required' });

  }
  try {

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    })


    const options = {
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: "Reset Your Password",
      html: HTML,

    }

    transporter.sendMail(options, (err, info) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Email sent: ' + info.response)

      }
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal server error' });
  }

}
