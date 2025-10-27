import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
// 👇 CAMBIO: Eliminamos la importación de ThemeSwitch
// import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

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
    // 👇 CAMBIO: Añadimos 'dark' directamente aquí para asegurar el modo oscuro desde el inicio
    <html lang="en" className="!scroll-smooth dark">
      <head>
        <script src="https://www.google.com/recaptcha/api.js?render=6LfTDPErAAAAAKABhQf_hN1NrRNjSD0Ey-DgDXa2"></script>
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider> {/* Mantenemos el proveedor, ahora forzará 'dark' */}
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            {/* 👇 CAMBIO: Eliminamos ThemeSwitch de aquí */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}