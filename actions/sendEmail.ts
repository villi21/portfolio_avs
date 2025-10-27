"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);
const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;

export const sendEmail = async (formData: FormData) => {
  console.log("--- New email submission received ---");

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const token = formData.get("token");

  // --- Validación (sin cambios) ---
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  // --- Verificación reCAPTCHA (sin cambios) ---
  console.log("Verifying reCAPTCHA...");
  if (!recaptchaSecretKey || !token) {
    console.error("reCAPTCHA secret key or token is missing.");
    return { error: "reCAPTCHA configuration error." };
  }
  try {
    const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${recaptchaSecretKey}&response=${token}`,
    });
    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      console.warn("reCAPTCHA verification failed:", recaptchaData);
      return { error: "reCAPTCHA verification failed. Possible bot activity." };
    }
    console.log("reCAPTCHA verification successful! Score:", recaptchaData.score);
  } catch (error) {
    console.error("Error connecting to reCAPTCHA verification service:", error);
    return { error: "Could not verify reCAPTCHA. Please try again." };
  }

  // --- Envío del Email ---
  console.log("Proceeding to send email with Resend...");
  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "alexvillegassalguero@gmail.com",
      subject: "Message from your Portfolio",
      // 👇 CORRECCIÓN: Cambiado reply_to a replyTo
      replyTo: senderEmail.toString(),
      react: React.createElement(ContactFormEmail, {
        message: message.toString(),
        senderEmail: senderEmail.toString(),
      }),
    });

    console.log("Email sent successfully with Resend:", data);
    return { data };

  } catch (error: unknown) {
    console.error("Error sending email with Resend:", error);
    return { error: getErrorMessage(error) };
  }
};