"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// Create Resend instance for sending emails
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  // 1) Extract form fields + token
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const token = formData.get("token"); // reCAPTCHA token from client

  // 2) Simple server-side validation for inputs
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  // 3) Verify reCAPTCHA token (Step 3)
  if (!token) {
    return { error: "Missing reCAPTCHA token" };
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY; // from .env
  const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";

  // Build POST body
  const params = new URLSearchParams();
  params.append("secret", secretKey || "");
  params.append("response", token.toString());

  try {
    const googleRes = await fetch(verifyUrl, {
      method: "POST",
      body: params,
    });
    const googleData = await googleRes.json();

    // Check if verification or score failed
    if (!googleData.success || googleData.score < 0.5) {
      return {
        error:
          "reCAPTCHA verification failed or score too low. Possible bot activity.",
      };
    }
  } catch (error: unknown) {
    // If Google’s verify endpoint couldn’t be reached or some other fetch error
    return {
      error: "Failed to verify reCAPTCHA. Please try again.",
    };
  }

  // 4) If reCAPTCHA passed, proceed to send the email
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "irahulk2903@gmail.com", // your receiving address
      subject: "Message from contact form",
      reply_to: senderEmail?.toString(),
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  // 5) Return success
  return {
    data,
  };
};
