"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Mail, Phone, MapPin, Send, Check, Copy, Sparkles, MessageSquare, Linkedin, Github, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Oportunidad Laboral / Puesto",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = [
      "¡Hola Willy Abraham! Te contacto desde tu portafolio web:",
      "",
      `*• Nombre / Empresa:* ${formData.name}`,
      `*• Correo:* ${formData.email}`,
      `*• Motivo:* ${formData.projectType}`,
      "",
      "*• Mensaje:*",
      formData.message
    ].join("\n");

    const whatsappUrl = `https://api.whatsapp.com/send?phone=51963530811&text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, "_blank");
    setFormSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-brand-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-mono text-brand-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONTACTO & CONTRATACIÓN</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            ¿Construimos algo <br />
            <span className="text-gradient-primary">extraordinario juntos?</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Estoy disponible para incorporarme a tu equipo de diseño gráfico o colaborar en proyectos de identidad visual, dirección de arte y contenido visual de alto impacto.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Quick Access & Social Hub */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Highlight Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-canvas-900 to-canvas-900 border border-emerald-500/30 shadow-xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Respuesta Rápida</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Charla directa por WhatsApp
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Si buscas una respuesta inmediata para entrevistas o consultas sobre el portafolio, escríbeme directamente a mi teléfono.
              </p>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
              >
                <span>Abrir Chat de WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Information List */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 space-y-4">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-gray-400">
                Canales de Contacto Directo
              </h4>

              {/* Email item */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] text-gray-400 font-mono">Correo Electrónico</div>
                    <div className="text-xs sm:text-sm font-medium text-white truncate">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors flex-shrink-0"
                  title="Copiar correo"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-mono">Teléfono / WhatsApp</div>
                  <div className="text-xs sm:text-sm font-medium text-white">{PERSONAL_INFO.phone}</div>
                </div>
              </div>

              {/* Location item */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-mono">Ubicación</div>
                  <div className="text-xs sm:text-sm font-medium text-white">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              {/* Social Network Links */}
              <div className="pt-2 flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-gray-200 hover:text-white text-xs font-mono transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-gray-200 hover:text-white text-xs font-mono transition-colors"
                >
                  <Github className="w-4 h-4 text-gray-300" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl glass-panel border border-white/15 shadow-2xl">
              
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    ¡Mensaje recibido con éxito!
                  </h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Gracias por ponerte en contacto. Responderé a tu correo a la brevedad posible. Si es urgente, recuerda que puedes escribirme directamente a WhatsApp.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", email: "", projectType: "Puesto Diseñador Gráfico", message: "" });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-2xl text-white">
                      Envíame un mensaje
                    </h3>
                    <p className="text-xs text-gray-400">
                      Completa este formulario y te responderé en menos de 24 horas.
                    </p>
                  </div>

                  {/* Name input */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono text-gray-300 font-medium">
                      Nombre o Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Estudio de Diseño / Reclutador"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>

                  {/* Email input */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono text-gray-300 font-medium">
                      Tu Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nombre@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>

                  {/* Project Type Select */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono text-gray-300 font-medium">
                      Motivo del Contacto
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-canvas-900 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    >
                      <option value="Oportunidad Laboral (Desarrollo / Diseño)">Oportunidad Laboral (Desarrollo / Diseño)</option>
                      <option value="Desarrollo de Software & Web">Desarrollo de Software & Web (Next.js / .NET / Flutter)</option>
                      <option value="Marketing Digital & Social Commerce">Marketing Digital & Social Media (E-Commerce)</option>
                      <option value="Branding & Identidad Visual">Branding & Identidad Visual de Marca</option>
                      <option value="Fotografía & Retoque en Lightroom">Fotografía Comercial & Color Grading (Lightroom)</option>
                      <option value="Otro Asunto">Otro Asunto</option>
                    </select>
                  </div>

                  {/* Message textarea */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono text-gray-300 font-medium">
                      Mensaje o Descripción de la Oportunidad *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Cuéntame sobre el puesto, los objetivos del proyecto o los requerimientos técnicos..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-amber-500 hover:from-brand-600 hover:to-amber-600 text-white font-bold text-sm shadow-xl shadow-brand-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
