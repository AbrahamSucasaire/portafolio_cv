"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { ArrowDown, Sparkles, Camera, Palette, Layers, Award, ArrowUpRight, Code2, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-tr from-brand-600/20 via-amber-500/15 to-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-500/30 text-xs font-mono text-brand-300">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
              <span>DISPONIBLE PARA DESARROLLO, MARKETING & DISEÑO</span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-2">
              <h2 className="font-mono text-xs sm:text-sm tracking-widest text-gray-400 uppercase font-semibold">
                Willy Abraham Sucasaire Coaquira
              </h2>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold tracking-tight leading-[1.15] text-white">
                Desarrollo de Software, <br />
                <span className="text-gradient-primary">Marketing & Fotografía</span> <br />
                <span className="text-gradient-cyan">con Pasión por el Diseño</span>
              </h1>
            </div>

            {/* Value Proposition Description */}
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl font-normal leading-relaxed">
              Desarrollador de software <strong className="text-white font-semibold">Mid-Level</strong> con un perfil multidisciplinario: fusiono la ingeniería de software (<strong className="text-white font-semibold">Next.js, .NET, Flutter</strong>) con estrategias de <strong className="text-white font-semibold">marketing digital & e-commerce</strong>, dirección de arte en <strong className="text-white font-semibold">fotografía con Lightroom</strong>, flujos asistidos por <strong className="text-white font-semibold">IA</strong> y una auténtica pasión por el <strong className="text-white font-semibold">diseño gráfico y branding</strong>.
            </p>

            {/* Core Pillars / Tool Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium">
                <Code2 className="w-3.5 h-3.5" />
                Desarrollo de Software (Mid-Level)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium">
                <TrendingUp className="w-3.5 h-3.5" />
                Marketing Digital & Social Media
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium">
                <Camera className="w-3.5 h-3.5" />
                Fotografía & Lightroom (Color Grading)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-medium">
                <Palette className="w-3.5 h-3.5" />
                Diseño Gráfico & Identidad Visual
              </span>
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#proyectos"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-amber-500 text-white font-semibold text-sm shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Ver Proyectos de Diseño</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#fotografia"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-panel text-gray-200 font-semibold text-sm hover:text-white hover:border-brand-500/40 hover:bg-white/5 transition-all flex items-center justify-center gap-2 group"
              >
                <Camera className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Galería Lightroom</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
              </a>
            </div>

            {/* Highlights Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 w-full">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-gray-400 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
          </div>

          {/* Creative Showcase Visual Composition (Superimposed Layered Cards) */}
          <div className="lg:col-span-5 relative py-6 sm:py-10">
            
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500/20 via-purple-500/15 to-cyan-500/20 rounded-full blur-3xl opacity-60 pointer-events-none" />

            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Back Layer Card (Superpuesta detrás - UNAP OTI Certificados) */}
              <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 w-[85%] aspect-[16/11] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl rotate-3 hover:rotate-1 transition-all duration-500 z-0 bg-canvas-900 group">
                <img
                  src="/projects/unap-oti-certificado-diploma.png"
                  alt="Diseño de Diploma y Certificado UNAP OTI"
                  className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-purple-300">
                  Diploma OTI UNAP
                </div>
              </div>

              {/* Front Main Card (Superpuesta al frente - UNAP Portal de Sedes) */}
              <div className="relative z-10 w-[92%] sm:w-[90%] rounded-3xl p-3 sm:p-4 glass-panel border border-white/20 shadow-2xl -rotate-1 hover:rotate-0 transition-all duration-500 group bg-canvas-950/80">
                
                {/* Hero Showcase Image */}
                <div className="relative aspect-[4/4.5] sm:aspect-[4/4.2] rounded-2xl overflow-hidden bg-canvas-900 border border-white/10 shadow-inner">
                  <img
                    src="/projects/unap-sedes-screenshot.png"
                    alt="Portal Oficial de Sedes UNAP por Willy Abraham"
                    className="w-full h-full object-cover object-left-top group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />

                  {/* Overlaid Card Meta */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white space-y-2.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-brand-500 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                        En Producción
                      </span>
                      <span className="text-[11px] text-gray-300 font-mono">
                        sedes.unap.edu.pe
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                      UNAP — Portal de Sedes
                    </h3>

                    {/* Color Swatch Preview */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/15">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-gray-300 font-mono mr-1">Paleta:</span>
                        <span className="w-3.5 h-3.5 rounded-full bg-[#001F54] border border-white/30 shadow-sm" title="#001F54 Azul Marino" />
                        <span className="w-3.5 h-3.5 rounded-full bg-[#D4AC0D] border border-white/30 shadow-sm" title="#D4AC0D Amarillo Dorado" />
                        <span className="w-3.5 h-3.5 rounded-full bg-[#7D3C98] border border-white/30 shadow-sm" title="#7D3C98 Púrpura" />
                        <span className="w-3.5 h-3.5 rounded-full bg-[#FFFFFF] border border-white/30 shadow-sm" title="#FFFFFF Blanco" />
                      </div>
                      <a href="#proyectos" className="text-xs text-amber-400 font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Ver caso →
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1: Lightroom Color Engine (Bottom-Left) */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 z-20 glass-panel px-3.5 py-2.5 rounded-2xl border border-cyan-500/30 shadow-2xl backdrop-blur-xl flex items-center gap-3 animate-float bg-canvas-950/90">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                  Lr
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Lightroom Grading</div>
                  <div className="text-[10px] text-cyan-300 font-mono">Curvas RGB & Colorimetría</div>
                </div>
              </div>

              {/* Floating Badge 2: Vector & UI Systems (Top-Left) */}
              <div className="absolute -top-4 -left-2 sm:-left-4 z-20 glass-panel px-3.5 py-2 rounded-2xl border border-amber-500/30 shadow-2xl backdrop-blur-xl flex items-center gap-2 bg-canvas-950/90">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-[11px] shadow-md">
                  UI
                </div>
                <span className="text-xs font-medium text-gray-200">Sistemas & Identidad</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
