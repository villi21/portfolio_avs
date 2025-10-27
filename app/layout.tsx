import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
// import ThemeSwitch from "@/components/theme-switch"; // ELIMINADO
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Script from "next/script"; // Importa el componente Script

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alex Villegas | Personal Portfolio",
  description:
    "Portfolio del perfil profesional en ciberseguridad de Alex Villegas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 👇 CAMBIO: Añadida la clase "dark" aquí
    <html lang="en" className="!scroll-smooth dark">
      <head>
        {/* El script de reCAPTCHA se mueve al final del body */}
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            {/* 👇 CAMBIO: Componente ThemeSwitch eliminado de aquí */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

        {/* 👇 CAMBIO: Script de reCAPTCHA movido aquí con la estrategia correcta */}
        <Script
          src="https://www.google.com/recaptcha/api.js?render=6LfTDPErAAAAAKABhQf_hN1NrRNjSD0Ey-DgDXa2"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}