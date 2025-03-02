import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { requestPasswordReset } from '../../../API/Controller/requestPasswordReset.js'
import UserModel from '../../..//API/Model/UserModel.js'

dotenv.config()

export const SendMail = async (req, res) => {
  const { email } = req.body


  if (!email) {
    return res.status(400).json({ message: 'Email is required' });

  }
  try {

    const IsUserExits = await UserModel.findOne({ email })

    if (!IsUserExits) {
      return res.status(404).json({ message: 'User not found' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const ButtonURL = await requestPasswordReset(email)

    const HTML = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            font-size: 16px;
            color: #ffffff;
            background-color: #007BFF;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Password Reset Request</h2>
        <p>Hello,</p>
        <p>We received a request to reset your password. Click the button below to set a new password:</p>
        <a href="${ButtonURL}" class="button">Reset Password</a>
        <p>If you didn't request this, you can ignore this email.</p>
        <p class="footer">If you have any questions, contact our support team.</p>
    </div>
</body>
</html>
`


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

    return res.status(200).json({ message: 'Email sent successfully, please check your inbox' });

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal server error' });
  }

}
