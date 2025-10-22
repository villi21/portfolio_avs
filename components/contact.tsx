'use client';

import React, { useRef } from 'react'; // Importamos useRef
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  // 1. Creamos una referencia específica para el formulario
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario

    // 2. reCAPTCHA debe estar cargado
    if (!window.grecaptcha) {
      toast.error('reCAPTCHA no está cargado. Por favor, espera un momento.');
      return;
    }

    // 3. Ejecutar reCAPTCHA v3 para obtener el token
    const token = await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '',
      { action: 'submit' }
    );

    // 4. Recolectar los datos del formulario usando la referencia
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    formData.append('token', token); // Añadimos el token a los datos

    // 5. Llamar a la server action para enviar el email
    const { error } = await sendEmail(formData);

    // 6. Mostrar el resultado
    if (error) {
      toast.error(error);
      return;
    }

    toast.success('¡Email enviado con éxito!');
    formRef.current.reset(); // Limpiamos el formulario
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

      {/* Usamos onSubmit para llamar a nuestra función handleSubmit */}
      <form
        ref={formRef} // Asignamos la referencia al formulario
        className="mt-10 flex flex-col dark:text-black"
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
        <SubmitBtn />
      </form>
    </motion.section>
  );
}