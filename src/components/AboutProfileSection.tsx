"use client";

import React, { useState } from "react";
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, VALUE_PROPOSITIONS } from "@/data/portfolio-data";
import { User, Briefcase, GraduationCap, Award, Download, CheckCircle2, Sparkles, ExternalLink, Camera, Code2, Boxes, Wand2 } from "lucide-react";

export default function AboutProfileSection() {
  const [activeTab, setActiveTab] = useState<"narrative" | "experience" | "education">("narrative");

  const getPropIcon = (iconName: string) => {
    switch (iconName) {
      case "Camera": return <Camera className="w-5 h-5 text-cyan-400" />;
      case "Boxes": return <Boxes className="w-5 h-5 text-brand-400" />;
      case "Code2": return <Code2 className="w-5 h-5 text-blue-400" />;
      case "Wand2": return <Wand2 className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="perfil" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-mono text-brand-400">
            <User className="w-3.5 h-3.5" />
            <span>PERFIL PROFESIONAL & TRAYECTORIA</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Diseño con Fundamento, <br />
            <span className="text-gradient-primary">Estrategia & Disciplina</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            No solo diseño cosas que se ven bien: diseño sistemas visuales funcionales que resuelven problemas reales de comunicación de marca y producto.
          </p>
        </div>

        {/* Value Proposition 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {VALUE_PROPOSITIONS.map((prop, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-brand-500/30 transition-all duration-300 space-y-3 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center shadow-inner">
                {getPropIcon(prop.icon)}
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                {prop.title}
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Tabbed Profile Hub */}
        <div className="glass-panel rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl">
          
          {/* Navigation Sub-Tabs */}
          <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveTab("narrative")}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === "narrative"
                  ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25 scale-105"
                  : "bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Biografía & Filosofía</span>
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === "experience"
                  ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25 scale-105"
                  : "bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experiencia Laboral</span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === "education"
                  ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25 scale-105"
                  : "bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Formación & Certificaciones</span>
            </button>
          </div>

          {/* TAB 1: NARRATIVE / ABOUT */}
          {activeTab === "narrative" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-7 space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed">
                <h3 className="font-display font-bold text-2xl text-white">
                  Hola, soy Willy Abraham Sucasaire Coaquira
                </h3>
                <p>
                  Bachiller en Ingeniería de Sistemas con Tercio Superior y actual maestrando en Ciencias de la Computación en la UNSA. Mi camino me llevó a descubrir que la mayor fortaleza de un producto o marca nace en la <strong className="text-white">intersección entre la estética visual, la psicología de la imagen y la robustez técnica</strong>.
                </p>
                <p>
                  Como diseñador, me enfoco en la <strong className="text-white">identidad de marca, diseño de posters, layouts publicitarios y estética fotográfica</strong>. Mi afición por la fotografía de paisajes en los Andes me ha dotado de una sensibilidad especial para calibrar colores en Adobe Lightroom, logrando paletas y atmósferas que cautivan y comunican emociones genuinas.
                </p>
                <p>
                  Además, al dominar herramientas de <strong className="text-white">IA generativa (Nano Banana de Google, difusión)</strong> y desarrollo web (Next.js/React), tengo la capacidad de materializar visiones gráficas a una velocidad y nivel de detalle excepcionales.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs shadow-lg shadow-brand-500/25 transition-all hover:scale-105"
                  >
                    Contactar Directamente
                  </a>
                  <a
                    href="#habilidades"
                    className="px-6 py-3 rounded-xl glass-panel text-gray-200 hover:text-white text-xs font-semibold transition-colors"
                  >
                    Ver Matriz de Habilidades
                  </a>
                </div>
              </div>

              {/* Quick Info Sidebar */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                
                {/* Real Author Portrait */}
                <div className="relative aspect-[4/4] sm:aspect-[4/3.5] rounded-2xl overflow-hidden border border-white/15 bg-canvas-950 group shadow-lg">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt="Willy Abraham Sucasaire Coaquira"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                    <div>
                      <div className="font-display font-bold text-sm text-white">Willy Abraham Sucasaire</div>
                      <div className="text-[10px] font-mono text-gray-300">Desarrollador Mid-Level & Creador Visual</div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-500 text-[10px] font-mono font-bold text-white shadow-md">
                      Autor
                    </span>
                  </div>
                </div>

                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brand-400">
                  Ficha de Resumen Profesional
                </h4>
                
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400">Nombre Completo:</span>
                    <span className="text-white font-medium">{PERSONAL_INFO.name}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400">Ubicación:</span>
                    <span className="text-white font-medium">{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400">Nivel de Inglés:</span>
                    <span className="text-amber-400 font-medium">B2 Avanzado (ICPNA)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400">Grado Académico:</span>
                    <span className="text-white font-medium">Bachiller Ing. Sistemas</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-gray-400">Posgrado:</span>
                    <span className="text-cyan-400 font-medium">Maestría en CS (UNSA)</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-gray-400">Especialidad Visual:</span>
                    <span className="text-brand-300 font-medium">Adobe Ps, Ai, Lr & IA</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="mailto:willyabrahamsucasaire@gmail.com"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-mono transition-colors"
                  >
                    <span>willyabrahamsucasaire@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: EXPERIENCIA LABORAL */}
          {activeTab === "experience" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="space-y-6">
                {EXPERIENCES.map((exp, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-500/30 transition-colors space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-display font-bold text-lg text-white">
                          {exp.role}
                        </h4>
                        <div className="text-xs font-mono text-brand-400">
                          {exp.company} • {exp.location}
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 self-start sm:self-auto">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                      {exp.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.skills.map((s, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-gray-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: FORMACIÓN ACADÉMICA */}
          {activeTab === "education" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
              {EDUCATION.map((edu, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] font-mono border border-cyan-500/20">
                        {edu.period}
                      </span>
                      {edu.honor && (
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 text-[10px] font-mono border border-amber-500/20 font-bold">
                          {edu.honor}
                        </span>
                      )}
                    </div>
                    <h4 className="font-display font-bold text-base sm:text-lg text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-mono text-gray-400">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>

                  {edu.detail && (
                    <p className="text-xs text-gray-300 pt-2 border-t border-white/5 leading-relaxed">
                      {edu.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
