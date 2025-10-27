'use client';

import React, { useRef, useState } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    if (!window.grecaptcha) {
      toast.error('reCAPTCHA no está cargado. Por favor, espera un momento.');
      setIsSubmitting(false);
      return;
    }

    const token = await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '',
      { action: 'submit' }
    );

    if (!formRef.current) {
        setIsSubmitting(false); 
        return;
    }
    const formData = new FormData(formRef.current);
    formData.append('token', token);

    const { error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      setIsSubmitting(false);
      return;
    }

    toast.success('¡Email enviado con éxito!');
    formRef.current.reset();

    setIsSubmitting(false);
  };

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
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Feel free to reach me at{' '}
        <a className="underline" href="mailto:alexvillegassalguero@gmail.com">
          alexvillegassalguero@gmail.com
        </a>{' '}
        or via the form below.
      </p>

      <form
        ref={formRef}
        className="mt-5 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Tu email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Tu mensaje..."
          required
          maxLength={5000}
        />
        <SubmitBtn pending={isSubmitting} />
      </form>
    </motion.section>
  );
}