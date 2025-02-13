"use server";
import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";
import { Donor, Recipient } from "./models";
import { connectToDb } from "./utils";
import nodemailer from "nodemailer";

export const handleDonor = async (previousState, formData) => {
  const {
    name,
    email,
    city,
    bloodGroup,
    gender,
    ph: phoneNumber,
  } = Object.fromEntries(formData);

  if (!name || !email || !city || !bloodGroup || !gender || !phoneNumber)
    return { success: false, error: "All fields are required" };

  try {
    await connectToDb();
    const donor = new Donor({
      name,
      email,
      city,
      bloodGroup,
      gender,
      phoneNumber,
    });
    await donor.save();
    revalidatePath("/donors")
    return { success: true, message: "Submitted successfully!" };
  } catch (error) {
    console.error(error);
    return { sucess: false, error: "Something went wrong!" };
  }
};

export const handleRecipient = async (previousState, formData) => {
  try {
    const {
      name,
      email,
      city,
      bloodGroup,
      ph: phoneNumber,
      message,
      bloodNeed,
      exchangeBlood,
    } = Object.fromEntries(formData);

    const selectedBloodTypes = formData.getAll("bloodTypes");

    const files = formData.getAll("documents"); // Get all uploaded files


    if (!name || !email || !city || !bloodGroup || !phoneNumber || !message)
      return { success: false, error: "Enter all the required fields." };
  
    const uploadedFiles = [];

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");

    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads",
      "documents",
      `${year}-${month}`
    );
    await fs.mkdir(uploadDir, { recursive: true });

    // Loop through each file
    for (const file of files) {
      if (!file || file.name === "undefined") continue;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);

      const originalName = path.parse(file.name).name;
      const extension = path.extname(file.name);
      const uniqueFilename = `${originalName}-${uuidv4()}${extension}`;

      const filePath = path.join(uploadDir, uniqueFilename);
      await fs.writeFile(filePath, buffer);

      const fileUrl = `/uploads/documents/${year}-${month}/${uniqueFilename}`;
      uploadedFiles.push(fileUrl);
    }

    await connectToDb();
    const recipient = new Recipient({
      name,
      email,
      city,
      bloodGroup,
      phoneNumber,
      message,
      provides: selectedBloodTypes,
      needs: bloodNeed,
      exchange: exchangeBlood,
      documents: uploadedFiles, // Store file URLs in the database
    });
    await recipient.save();
    revalidatePath("/recipients");
    return { success: true, message:"Submitted successfully!" };
  } catch (error) {
    console.error(error);
    return { sucess : false, error: "Something went wrong!" };
  }
};

export async function sendEmail(previousState, formData) {
  const { email, name, message } = Object.fromEntries(formData);

  if (!email || !name || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    // Setup SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Change this if using another email provider
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password (for Gmail, use App Passwords)
      },
    });

    // Email options
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: process.env.EMAIL_SUBJECT,
      text: `
      Name: ${name}
      Email: ${email}
      Message:
      ${message}
      `,
    });
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.log("Error sending mail ", error.message);
    return { success: false, error: "Failed to send email. " + error.message };
  }
}
