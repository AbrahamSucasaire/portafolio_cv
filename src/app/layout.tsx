import type { Metadata } from "next";
import { Inter, Syne, Space_Mono, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Willy Abraham Sucasaire | Developer & Diseñador Visual",
  description: "Portafolio profesional de Willy Abraham Sucasaire Coaquira. Desarrollo de software, marketing digital, dirección de arte, composición editorial, fotografía en Lightroom y diseño visual.",
  keywords: [
    "Diseñador Gráfico",
    "Visual Designer",
    "Desarrollador Software",
    "Marketing Digital",
    "Brand Identity",
    "Dirección de Arte",
    "Adobe Lightroom",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Fotografía de Paisaje",
    "UI UX Design",
    "Willy Abraham Sucasaire Coaquira",
    "Portafolio de Diseño Perú"
  ],
  authors: [{ name: "Willy Abraham Sucasaire Coaquira" }],
  creator: "Willy Abraham Sucasaire Coaquira",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://abrahamsucasaire.vercel.app",
    title: "Willy Abraham Sucasaire | Developer & Diseñador Visual",
    description: "Desarrollo de software, marketing digital y diseño visual con sensibilidad fotográfica.",
    siteName: "Willy Abraham Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Willy Abraham Sucasaire | Developer & Diseñador Visual",
    description: "Portafolio profesional de desarrollo, marketing, branding y fotografía editorial.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${syne.variable} ${spaceMono.variable} ${playfair.variable} font-sans antialiased relative min-h-screen bg-[#F8F9FA] dark:bg-canvas-950 text-gray-900 dark:text-gray-100 selection:bg-brand-500 selection:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
