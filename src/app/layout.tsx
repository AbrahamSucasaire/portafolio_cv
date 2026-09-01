import type { Metadata } from "next";
import { Inter, Syne, Space_Mono, Playfair_Display } from "next/font/google";
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
  title: "Willy Abraham Sucasaire | Diseñador Gráfico & Art Director",
  description: "Portafolio profesional de Willy Abraham Sucasaire Coaquira. Diseño de identidad de marca, dirección de arte, composición editorial, fotografía en Lightroom y desarrollo visual.",
  keywords: [
    "Diseñador Gráfico",
    "Visual Designer",
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
    title: "Willy Abraham Sucasaire | Diseñador Gráfico & Art Director",
    description: "Diseño visual de alto impacto con sensibilidad fotográfica y precisión técnica.",
    siteName: "Willy Abraham Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Willy Abraham Sucasaire | Diseñador Gráfico & Art Director",
    description: "Portafolio profesional de diseño visual, branding y fotografía editorial.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} ${spaceMono.variable} ${playfair.variable} font-sans bg-canvas-950 text-gray-100 antialiased relative min-h-screen selection:bg-brand-500 selection:text-white`}
      >
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
