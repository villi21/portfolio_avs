import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Script from 'next/script'; // ¡Asegúrate de que esta importación esté presente!

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alex Villegas | Personal Portfolio",
  description: "Portfolio del perfil profesional en ciberseguridad de Alex Villegas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Asegúrate de que 'dark' esté aquí si quieres modo oscuro por defecto
    <html lang="en" className="!scroll-smooth dark">
      <head>
        {/* La etiqueta <script> original DEBE SER ELIMINADA de aquí */}
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* ... divs de fondo ... */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            {/* ThemeSwitch fue eliminado */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

        {/* 👇 El componente Script debe estar aquí, antes de cerrar </body> */}
        <Script
          src="https://www.google.com/recaptcha/api.js?render=6LfTDPErAAAAAKABhQf_hN1NrRNjSD0Ey-DgDXa2"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}