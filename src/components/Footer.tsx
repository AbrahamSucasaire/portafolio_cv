"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { ArrowUp, Heart, Sparkles, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-canvas-950/80 backdrop-blur-md pt-16 pb-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-amber-500 flex items-center justify-center font-display font-bold text-white shadow-md">
                W
              </div>
              <div>
                <div className="font-display font-bold text-white text-base">
                  {PERSONAL_INFO.displayName}
                </div>
                <div className="text-[10px] font-mono text-gray-400">
                  {PERSONAL_INFO.roleTitle}
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Diseño de identidad visual, cartelería editorial, curaduría cromática en Lightroom y experiencias digitales de alto impacto.
            </p>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Disponible para contrataciones y postulaciones</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Navegación
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#proyectos" className="hover:text-white transition-colors">
                  Proyectos de Diseño Gráfico
                </a>
              </li>
              <li>
                <a href="#fotografia" className="hover:text-white transition-colors">
                  Galería Fotográfica & Lightroom
                </a>
              </li>
              <li>
                <a href="#perfil" className="hover:text-white transition-colors">
                  Perfil Profesional & CV
                </a>
              </li>
              <li>
                <a href="#habilidades" className="hover:text-white transition-colors">
                  Herramientas & Software
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto Directo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Design Specializations */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Especialidades Visuales
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-gray-300">
                Adobe Photoshop
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-gray-300">
                Adobe Illustrator
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-gray-300">
                Adobe Lightroom
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-gray-300">
                Identidad de Marca
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-gray-300">
                Color Grading
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-gray-300">
                IA Generativa & Retoque
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-gray-300">
                Next.js / UI Systems
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-[11px] text-gray-400">
            <span>© {new Date().getFullYear()} Willy Abraham Sucasaire Coaquira. Diseñado con precisión y sensibilidad visual.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 text-[11px] font-mono"
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
