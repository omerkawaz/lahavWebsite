const express = require("express");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = 4000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

console.log(process.env.EMAIL_ACCOUNT);
console.log(process.env.EMAIL_PASSWORD);

app.use(express.static(path.join(__dirname, "build")));

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_ACCOUNT, // generated ethereal user
    pass: process.env.EMAIL_PASSWORD, // generated ethereal password
  },
});

app.post("/services/email/send", async (req, res) => {
  const { fname, email, phone, text } = req.body;

  try {
    let info = await transporter.sendMail({
      from: `${fname} 👻${email}`, 
      to: "lahavtipul@gmail.com, nisanayash93@gmail.com", 
      subject: `[WEBSITE] Message from ${fname} ${email} ${phone}`,
      text: `Message from ${fname} ${email} ${phone} ${text}`, 
      from: process.env.EMAIL_ACCOUNT,
    });

    res.send("Message send successfully");
  } catch (error) {
    res.status(400).json({ error });
  }
});

app.use("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
