const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(express.json());

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nikhil2212garg@gmail.com',
    pass: 'rbox evai qcsg larq', // Use the app password generated in Step 1
  },
});

console.log(transporter)

// Create a POST route to send emails
app.post('/send-email', async(req, res) => {
  try{
    const { to, subject, text, html } = req.body;
      const responseEmail = await transporter.sendMail({
        from: 'nikhil2212garg@gmail.com',
        to,
        subject,
        text,
        html,
      });
    res.status(200).json({ responseEmail });
   }catch(err){
     res.status(400).json({err});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



