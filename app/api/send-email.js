import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { to, subject, text } = await req.json();

  // console.log("text", text)

  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_HOST_DEFAULT_USER, // your email user
      pass: process.env.EMAIL_HOST_PASSWORD, // your email password
    },
  });

  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: `"No Reply" <${process.env.EMAIL_HOST_NO_REPLAY_USER}>`, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
      html: text,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending email", error: error.message },
      { status: 500 }
    );
  }
}
