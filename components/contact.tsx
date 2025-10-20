"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail"; // presumably a client action or fetch
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // 1) reCAPTCHA must be loaded
    if (!window.grecaptcha) {
      toast.error("reCAPTCHA not yet loaded. Please wait a moment.");
      return;
    }

    // 2) Execute reCAPTCHA v3
    const token = await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "",
      { action: "submit" }
    );

    // 3) Collect form data
    const formData = new FormData(e.currentTarget);

    // 4) Append the token to formData
    formData.append("token", token);

    // 5) Call your sendEmail function,
    //    which should verify reCAPTCHA token on the server
    const { data, error } = await sendEmail(formData);

    // 6) Show success or error
    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email sent successfully!");
  }

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:rkumar25@gmu.edu">
          rkumar25@gmu.edu
        </a>{" "}
        or through this form.
      </p>

      {/*  Remove action={...} and use onSubmit to handle client-side logic */}
      <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message..."
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
