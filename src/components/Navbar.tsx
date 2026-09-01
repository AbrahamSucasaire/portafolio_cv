"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { useTheme } from "@/context/ThemeContext";
import {
  Layers,
  Camera,
  Sparkles,
  User,
  Mail,
  Download,
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Toggle compact floating pill mode
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // ScrollSpy: Detect which section is currently in view
      const sections = ["contacto", "perfil", "habilidades", "fotografia", "proyectos"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection("inicio");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "proyectos", name: "Proyectos", href: "#proyectos", icon: Layers },
    { id: "fotografia", name: "Fotografía", href: "#fotografia", icon: Camera },
    { id: "habilidades", name: "Habilidades", href: "#habilidades", icon: Sparkles },
    { id: "perfil", name: "Sobre Mí", href: "#perfil", icon: User },
    { id: "contacto", name: "Contacto", href: "#contacto", icon: Mail },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 pointer-events-none">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? "py-3 sm:py-4" : "py-5 sm:py-6"
        }`}
      >
        <div className="flex items-center justify-between pointer-events-auto">
          
          {/* Brand & Author Pill */}
          <a
            href="#"
            className="group flex items-center gap-3 p-1.5 pr-4 rounded-full bg-white/85 dark:bg-canvas-950/80 backdrop-blur-xl border border-black/10 dark:border-white/10 hover:border-brand-500/40 shadow-xl transition-all duration-300 hover:scale-103"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-black/10 dark:border-white/20 shadow-md">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.displayName}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-canvas-950 animate-pulse" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-xs sm:text-sm text-gray-900 dark:text-white tracking-tight">
                  {PERSONAL_INFO.displayName}
                </span>
              </div>
              <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">
                Mid-Level Dev & Visual
              </span>
            </div>
          </a>

          {/* Central Floating Capsule Navigation (Desktop) */}
          <nav className="hidden md:flex items-center p-1.5 rounded-full bg-white/85 dark:bg-canvas-950/85 backdrop-blur-2xl border border-black/10 dark:border-white/15 shadow-2xl shadow-black/10 dark:shadow-black/60 gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-brand-500 text-white shadow-lg shadow-brand-500/30 scale-102"
                      : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/[0.08]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-gray-500 dark:text-gray-400"}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/85 dark:bg-canvas-950/80 backdrop-blur-xl border border-black/10 dark:border-white/15 text-gray-700 dark:text-gray-200 hover:text-brand-500 dark:hover:text-amber-400 hover:border-brand-500/30 transition-all hover:scale-105 shadow-lg"
              title={theme === "dark" ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
              aria-label="Alternar tema claro y oscuro"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-180 duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-brand-500 animate-in spin-in-180 duration-300" />
              )}
            </button>

            <a
              href="#perfil"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white/85 dark:bg-canvas-950/80 backdrop-blur-xl border border-black/10 dark:border-white/15 text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/30 transition-all hover:scale-105 shadow-lg"
            >
              <Download className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400" />
              <span>CV</span>
            </a>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-brand-500 via-amber-500 to-brand-500 bg-[length:200%_auto] hover:bg-[position:right_center] shadow-lg shadow-brand-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-white animate-spin-slow" />
              <span>Hablemos</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/85 dark:bg-canvas-950/90 backdrop-blur-md border border-black/10 dark:border-white/15 text-gray-700 dark:text-gray-200 shadow-md focus:outline-none"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-brand-500" />
              )}
            </button>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-brand-500 text-white shadow-md shadow-brand-500/20"
            >
              Hablemos
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/85 dark:bg-canvas-950/90 backdrop-blur-md border border-black/10 dark:border-white/15 text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white shadow-lg focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Ultra-Modern Glass Sheet) */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="p-5 rounded-3xl bg-white/95 dark:bg-canvas-950/95 backdrop-blur-2xl border border-black/10 dark:border-white/15 shadow-2xl space-y-3">
            <div className="text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest px-2 pb-1 border-b border-black/5 dark:border-white/5">
              Navegación del Portafolio
            </div>
            
            <div className="grid grid-cols-1 gap-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-medium transition-all ${
                      isActive
                        ? "bg-brand-500 text-white shadow-md"
                        : "bg-black/[0.02] dark:bg-white/[0.03] text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/[0.08]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                );
              })}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-brand-500 to-amber-500 text-white font-semibold text-xs shadow-lg shadow-brand-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
