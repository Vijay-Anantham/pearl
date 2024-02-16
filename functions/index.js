const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Create a Nodemailer transporter using your email credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vijayanantham143@gmail.com",
    pass: "Vijay@9111",
  },
});

exports.sendEmail = functions.https.onRequest(async (req, res) => {
  try {
    const {message} = req.body;

    // Use Nodemailer to send the email
    const mailOptions = {
      from: "vijayanantham143@gmail.com",
      to: "vijayanantham143@gmail.com",
      subject: "She clicked yess..!",
      text: `Yes button message: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Internal Server Error");
  }
});
