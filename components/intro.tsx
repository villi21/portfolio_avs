'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from "@/lib/hooks"; // Importamos el hook

const Intro = () => {
  // 👇 CAMBIO: Llamamos al hook para la sección "Home" con un threshold más alto
  const { ref } = useSectionInView("Home", 0.75); // Usamos 0.75 en lugar del 0.5 por defecto

  return (
    // 👇 CAMBIO: Añadimos la ref a la sección
    <section
      ref={ref}
      id="home"
      className="h-screen max-w-5xl mx-auto scroll-mt-28 flex flex-col justify-center"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

        {/* --- FOTO --- */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Image
            src="/FotoAVS.png"
            alt="Alex Villegas portrait"
            width={300}
            height={300}
            quality="95"
            priority={true}
            className="h-72 w-72 rounded-full object-cover shadow-xl"
          />
        </motion.div>

        {/* --- TEXTO Y BOTONES --- */}
        <motion.div
          className="flex flex-col items-center lg:items-start gap-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="text-center lg:text-left">
            <h1 className="text-6xl font-bold text-white">Alex Villegas</h1>
            <p className="text-4xl font-bold text-gray-400/70 mt-2">Cybersecurity Student</p>
          </div>

          <div className="grid grid-cols-[1fr_auto] grid-rows-2 gap-x-4 gap-y-4 w-full max-w-sm">
            <a
              href="/CV_AVS.pdf"
              download
              className="bg-gray-900 font-semibold text-white px-8 py-5 flex items-center justify-center rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition shadow-md"
            >
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/alexvillegassalguero/"
              target="_blank"
              aria-label="LinkedIn"
              className="bg-white/10 text-white p-5 flex items-center justify-center rounded-full aspect-square focus:scale-110 hover:scale-110 active:scale-105 transition shadow-md"
            >
              <BsLinkedin size={28} />
            </a>

            <Link
              href="#contact"
              className="bg-white/10 font-semibold text-white px-8 py-5 flex items-center justify-center rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-white/20 active:scale-100 transition shadow-md"
            >
              Contact Me
            </Link>

            <a
              href="https://github.com/villi21"
              target="_blank"
              aria-label="GitHub"
              className="bg-white/10 text-white p-5 flex items-center justify-center rounded-full aspect-square focus:scale-110 hover:scale-110 active:scale-105 transition shadow-md"
            >
              <FaGithubSquare size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;