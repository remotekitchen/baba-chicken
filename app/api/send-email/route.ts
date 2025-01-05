import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: any) {
  const { name, email, phone, message, to, subject } = await req.json();

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_HOST_DEFAULT_USER, // your email user
      pass: process.env.EMAIL_HOST_PASSWORD, // your email password
    },
  });

  // Basic HTML email content
  const htmlContent = `
  <div style="background-color: #f9f9f9; padding: 20px; font-family: Arial, sans-serif;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #333333; text-align: center;">New Message Received</h2>
      <p style="color: #555555;">Below are the details of the message:</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p style="color: #555555;">${message}</p>
      <hr style="border: 0; height: 1px; background-color: #dddddd; margin: 20px 0;" />
      <p style="color: #999999; text-align: center;">This is an automated email. Please do not reply.</p>
    </div>
  </div>
  `;

  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: `No Reply <${process.env.EMAIL_HOST_NO_REPLAY_USER}>`, // sender address
      to: to, // recipient address (e.g., admin email)
      subject: subject, // Subject line
      html: htmlContent, // HTML body content
    });

    return NextResponse.json({
      message: "Email sent successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
}
