// routes/inquiry.js
import express from "express";
import { sendInquiryMail } from "../utils/mailer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, productInterest, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !productInterest || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Send mail
    await sendInquiryMail({ name, email, phone, productInterest, message });

    res.status(200).json({ success: true, message: "Inquiry sent successfully!" });
  } catch (error) {
    console.error("Error in inquiry route:", error);
    res.status(500).json({ success: false, error: "Failed to send inquiry." });
  }
});

export default router;
