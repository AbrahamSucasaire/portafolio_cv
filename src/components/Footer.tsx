"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { ArrowUp, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-white/90 dark:bg-canvas-950/80 backdrop-blur-md pt-16 pb-12 text-gray-600 dark:text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-black/10 dark:border-white/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-amber-500 flex items-center justify-center font-display font-bold text-white shadow-md">
                W
              </div>
              <div>
                <div className="font-display font-bold text-gray-900 dark:text-white text-base">
                  {PERSONAL_INFO.displayName}
                </div>
                <div className="text-[10px] font-mono text-gray-500 dark:text-gray-400">
                  {PERSONAL_INFO.roleTitle}
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed max-w-sm">
              Desarrollo de software, estrategias de marketing digital, identidad de marca y curaduría fotográfica en Adobe Lightroom.
            </p>
            <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Disponible para contrataciones y proyectos</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Navegación
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#proyectos" className="hover:text-brand-500 dark:hover:text-white transition-colors">
                  Proyectos & Casos de Estudio
                </a>
              </li>
              <li>
                <a href="#fotografia" className="hover:text-brand-500 dark:hover:text-white transition-colors">
                  Galería Fotográfica & Lightroom
                </a>
              </li>
              <li>
                <a href="#habilidades" className="hover:text-brand-500 dark:hover:text-white transition-colors">
                  Arsenal de Habilidades
                </a>
              </li>
              <li>
                <a href="#perfil" className="hover:text-brand-500 dark:hover:text-white transition-colors">
                  Perfil Profesional & CV
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-brand-500 dark:hover:text-white transition-colors">
                  Contacto Directo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Design & Tech Specializations */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Especialidades
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[11px] text-gray-700 dark:text-gray-300">
                Next.js / React
              </span>
              <span className="px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[11px] text-gray-700 dark:text-gray-300">
                .NET Core & Flutter
              </span>
              <span className="px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[11px] text-gray-700 dark:text-gray-300">
                Marketing & E-Commerce
              </span>
              <span className="px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[11px] text-gray-700 dark:text-gray-300">
                Adobe Lightroom
              </span>
              <span className="px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[11px] text-gray-700 dark:text-gray-300">
                Adobe Photoshop / Illustrator
              </span>
              <span className="px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[11px] text-gray-700 dark:text-gray-300">
                Identidad de Marca & Branding
              </span>
              <span className="px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[11px] text-gray-700 dark:text-gray-300">
                Herramientas de IA Generativa
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400">
            <span>© {new Date().getFullYear()} Willy Abraham Sucasaire Coaquira. Diseñado con precisión y sensibilidad estética.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/15 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5 text-[11px] font-mono"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
