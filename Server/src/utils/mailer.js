// utils/mailer.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send inquiry mail
export const sendInquiryMail = async ({ name, email, phone, productInterest, message }) => {
  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender name (your Gmail)
      to: process.env.EMAIL_USER, // Send to yourself (admin)
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
  } catch (error) {
    console.error("❌ Error sending inquiry email:", error);
    throw error;
  }
};
