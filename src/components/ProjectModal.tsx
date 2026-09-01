"use client";

import React, { useState, useEffect } from "react";
import { DesignProject } from "@/types/portfolio";
import { X, Check, Copy, ExternalLink, Layers, Palette, Type, Package, Sparkles, Maximize2, ZoomIn } from "lucide-react";

interface ProjectModalProps {
  project: DesignProject | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [selectedZoomImage, setSelectedZoomImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedZoomImage) {
          setSelectedZoomImage(null);
        } else {
          onClose();
        }
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 lg:p-10 overflow-y-auto bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* Click backdrop to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container (Wider & Spacious) */}
      <div className="relative w-full max-w-6xl xl:max-w-7xl max-h-[92vh] overflow-y-auto bg-canvas-900 border border-white/15 rounded-3xl shadow-2xl z-10 text-gray-100 flex flex-col custom-scrollbar">
        
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 bg-canvas-900/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-300 text-xs font-mono font-semibold">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-gray-400 font-mono hidden sm:inline-block">
              {project.year} • {project.clientOrContext}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-10">
          
          {/* Title & Subtitle */}
          <div className="space-y-2.5 max-w-4xl">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Hero Media Preview (Clickable to zoom) */}
          <div
            onClick={() => setSelectedZoomImage(project.coverImage)}
            className="group relative rounded-3xl overflow-hidden border border-white/15 bg-canvas-950 aspect-[16/9] lg:aspect-[21/9] max-h-[500px] cursor-zoom-in shadow-2xl"
            title="Haz clic para ver imagen completa en alta resolución"
          >
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="px-5 py-2.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-xs font-mono text-white flex items-center gap-2.5 shadow-2xl">
                <Maximize2 className="w-4 h-4 text-brand-400" />
                <span>Clic para ver en pantalla completa</span>
              </div>
            </div>
          </div>

          {/* Core Case Study Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Content (Challenge & Solution) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Summary */}
              <div className="space-y-2">
                <h3 className="font-display font-semibold text-lg text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-400" />
                  <span>Visión General del Proyecto</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Challenge */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  El Desafío de Diseño
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-2xl bg-brand-500/[0.05] border border-brand-500/20 space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400">
                  Solución Visual & Estrategia
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Gallery Images (Clickable to zoom) */}
              {project.galleryImages.length > 1 && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                      Vistas de Composición & Mockups
                    </h4>
                    <span className="text-[11px] font-mono text-brand-400">
                      (Toca cualquier imagen para ampliar)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.galleryImages.map((img, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedZoomImage(img)}
                        className="group relative rounded-xl overflow-hidden border border-white/15 aspect-[16/10] bg-canvas-950 cursor-zoom-in hover:border-brand-500/50 transition-all duration-300 shadow-lg"
                        title="Haz clic para ampliar"
                      >
                        <img
                          src={img}
                          alt={`${project.title} vista ${i + 1}`}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white flex items-center gap-1.5 shadow-xl">
                            <Maximize2 className="w-3.5 h-3.5 text-brand-400" />
                            <span>Ampliar imagen</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Sidebar Specs (Palette, Typo, Tools, Deliverables) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Color Palette Spec */}
              <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-gray-300 uppercase tracking-wider">
                  <Palette className="w-4 h-4 text-brand-400" />
                  <span>Paleta Cromática</span>
                </div>
                <div className="space-y-2">
                  {project.colors.map((c, i) => (
                    <div
                      key={i}
                      onClick={() => copyToClipboard(c.hex)}
                      className="flex items-center justify-between p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] transition-colors cursor-pointer group"
                      title="Haz clic para copiar HEX"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-5 h-5 rounded-lg border border-white/20 shadow-sm"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span className="text-xs font-medium text-gray-200">{c.name}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-gray-400 group-hover:text-brand-400">
                        <span>{c.hex}</span>
                        {copiedHex === c.hex ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 text-center font-mono">
                  Haz clic en cualquier color para copiar el código HEX
                </p>
              </div>

              {/* Typography Specs */}
              <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-gray-300 uppercase tracking-wider">
                  <Type className="w-4 h-4 text-cyan-400" />
                  <span>Tipografías</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.typography.map((font, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-gray-200">
                      {font}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables List */}
              <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-gray-300 uppercase tracking-wider">
                  <Package className="w-4 h-4 text-amber-400" />
                  <span>Entregables</span>
                </div>
                <ul className="space-y-2 text-xs text-gray-300">
                  {project.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Used */}
              <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-gray-300 uppercase tracking-wider">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>Software</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-[11px] text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Link Button if available */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs shadow-lg shadow-brand-500/20 transition-all hover:scale-105"
                >
                  <span>Ver Proyecto en Vivo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-canvas-950/60 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-gray-400 font-mono">
            Diseñado por Abraham Sucasaire
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
          >
            Cerrar Caso
          </button>
        </div>

      </div>

      {/* High-Resolution Fullscreen Zoom Lightbox Overlay */}
      {selectedZoomImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200"
          onClick={() => setSelectedZoomImage(null)}
        >
          {/* Close button top right */}
          <button
            onClick={() => setSelectedZoomImage(null)}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 shadow-2xl transition-all hover:scale-110"
            aria-label="Cerrar vista ampliada"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Top Bar Info */}
          <div className="absolute top-5 left-6 z-50 flex items-center gap-2 pointer-events-none">
            <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-gray-200">
              Vista en Alta Resolución • {project.title}
            </span>
          </div>

          {/* Fullscreen Image Container */}
          <div
            className="relative max-w-7xl max-h-[92vh] w-full h-full flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedZoomImage}
              alt="Vista ampliada"
              className="max-h-[90vh] max-w-[95vw] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/15"
            />
          </div>

          {/* Bottom helper text */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 text-[11px] font-mono text-gray-400 bg-black/60 px-4 py-1.5 rounded-full border border-white/10 pointer-events-none">
            Haz clic en cualquier lugar o presiona ESC para cerrar
          </div>
        </div>
      )}

    </div>
  );
}
