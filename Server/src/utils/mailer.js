// utils/mailer.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Best practice: Call dotenv.config() in your main server file (e.g., index.js)
// But having it here also works.
dotenv.config();

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // This MUST be your 16-character Google App Password
  },
});

// Verify connection on startup
transporter.verify(function (error, success) {
  if (error) {
    console.error("❌ SMTP Connection Error:", error);
  } else {
    console.log("✅ SMTP Server is configured and ready to send mail.");
  }
});

// Send inquiry mail
export const sendInquiryMail = async ({ name, email, phone, productInterest, message }) => {
  try {
    const info = await transporter.sendMail({
      from: `"Website Inquiry" <${process.env.EMAIL_USER}>`, // Always send from your authenticated email
      to: process.env.EMAIL_USER, // Send the email to yourself
      replyTo: email, // Set the user's email as the reply-to address
      subject: `New Inquiry: ${productInterest || "General Inquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Product Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Product Interest:</strong> ${productInterest}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr />
          <p style="font-size: 12px; color: #555;">This message was sent via your website inquiry form.</p>
        </div>
      `,
    });

    console.log("✅ Inquiry email sent:", info.messageId);
    return info; // Return info on success
  } catch (error) {
    console.error("❌ Error sending inquiry email:", error);
    throw error; // Propagate the error to be handled by the calling route
  }
};