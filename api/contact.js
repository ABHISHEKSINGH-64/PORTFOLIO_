import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db();

  cachedClient = client;
  cachedDb = db;
  return { client, db };
}

export default async function handler(req, res) {
  // Only allow POST request
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }

  const { name, email, subject, message } = req.body;

  // Simple validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required' });
  }

  let dbSaved = false;
  let emailSent = false;
  let emailError = null;
  let dbError = null;

  // 1. Store in MongoDB
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('submissions');
    
    await collection.insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });
    dbSaved = true;
  } catch (error) {
    console.error('MongoDB Error:', error);
    dbError = error.message;
  }

  // 2. Send Gmail Notification
  const hasEmailConfig = process.env.GMAIL_USER && process.env.GMAIL_PASS;
  
  if (hasEmailConfig) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
        to: process.env.NOTIFICATION_EMAIL || process.env.GMAIL_USER,
        replyTo: email,
        subject: `New Portfolio Message: ${subject}`,
        text: `You have received a new contact message from your portfolio website.\n\n` +
              `Name: ${name}\n` +
              `Email: ${email}\n` +
              `Subject: ${subject}\n\n` +
              `Message:\n${message}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; color: #1e293b;">
            <h2 style="color: #6d28d9; margin-bottom: 20px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">
              New Portfolio Contact Submission
            </h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #8b5cf6;">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin-top: 15px; border-left: 4px solid #8b5cf6;">
              <p style="margin: 0; white-space: pre-wrap; font-style: italic; line-height: 1.6;">${message}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #f1f5f9; margin-top: 25px; margin-bottom: 15px;" />
            <p style="font-size: 11px; color: #64748b; text-align: center;">
              This notification was generated from your portfolio contact form.
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      emailSent = true;
    } catch (error) {
      console.error('Nodemailer Error:', error);
      emailError = error.message;
    }
  } else {
    emailError = 'Gmail credentials (GMAIL_USER and GMAIL_PASS) are not configured';
  }

  // 3. Return response state
  if (dbSaved) {
    return res.status(200).json({
      success: true,
      message: emailSent 
        ? 'Message saved to database and email notification sent.' 
        : 'Message saved to database, but email notification failed.',
      emailSent,
      emailError
    });
  } else {
    return res.status(500).json({
      success: false,
      error: 'Failed to save submission to database.',
      dbError,
      emailSent,
      emailError
    });
  }
}
