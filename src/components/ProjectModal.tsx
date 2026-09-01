"use client";

import React, { useState, useEffect } from "react";
import { DesignProject } from "@/types/portfolio";
import {
  X,
  Check,
  Copy,
  ExternalLink,
  Layers,
  Palette,
  Type,
  Package,
  Sparkles,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Sliders,
  Eye
} from "lucide-react";

interface ProjectModalProps {
  project: DesignProject | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [selectedZoomImage, setSelectedZoomImage] = useState<string | null>(null);

  // Set default active image when project changes
  useEffect(() => {
    if (project) {
      setActiveImage(project.coverImage);
    }
  }, [project]);

  // Keyboard navigation & lock scroll
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
  }, [project, selectedZoomImage, onClose]);

  if (!project) return null;

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const images = project.galleryImages.length > 0 ? project.galleryImages : [project.coverImage];
  const currentImageIndex = images.indexOf(activeImage);

  const handleNextImage = () => {
    const nextIdx = (currentImageIndex + 1) % images.length;
    setActiveImage(images[nextIdx]);
  };

  const handlePrevImage = () => {
    const prevIdx = (currentImageIndex - 1 + images.length) % images.length;
    setActiveImage(images[prevIdx]);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Container: Split 2-Column Side-by-Side (Like Photo Lightbox) */}
      <div className="relative w-full max-w-6xl max-h-[95vh] overflow-hidden bg-canvas-900 border border-white/15 rounded-3xl shadow-2xl z-10 flex flex-col md:flex-row">
        
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-colors"
          aria-label="Cerrar caso de estudio"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT COLUMN: Media Preview & Design Strategy (Not overly wide, contained & sleek) */}
        <div className="relative flex-grow flex flex-col justify-between bg-black/95 p-4 sm:p-6 md:p-7 overflow-y-auto space-y-5">
          
          {/* Main Media Showcase */}
          <div className="relative flex-grow flex items-center justify-center bg-canvas-950/80 rounded-2xl border border-white/10 p-3 sm:p-4 min-h-[300px] md:min-h-[420px] group">
            
            {/* Previous image arrow */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/70 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 transition-all hover:scale-110"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Active Image */}
            <div
              onClick={() => setSelectedZoomImage(activeImage || project.coverImage)}
              className="cursor-zoom-in relative flex items-center justify-center w-full h-full"
              title="Haz clic para ver en pantalla completa"
            >
              <img
                src={activeImage || project.coverImage}
                alt={project.title}
                className="max-h-[50vh] md:max-h-[56vh] w-auto max-w-full object-contain rounded-xl shadow-2xl group-hover:scale-[1.01] transition-transform duration-300"
              />
              
              {/* Zoom pill overlay */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center pointer-events-none">
                <span className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-white flex items-center gap-2 shadow-2xl">
                  <Maximize2 className="w-3.5 h-3.5 text-brand-400" />
                  <span>Ver en Pantalla Completa</span>
                </span>
              </div>
            </div>

            {/* Next image arrow */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/70 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 transition-all hover:scale-110"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Thumbnails Row (Quick Switcher) */}
          {images.length > 1 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 px-1">
                <span>Vistas & Mockups ({images.length} piezas)</span>
                <span className="text-brand-400">Toca para cambiar de vista</span>
              </div>
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1 no-scrollbar">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative flex-shrink-0 w-16 sm:w-20 aspect-[16/10] rounded-xl overflow-hidden border transition-all duration-200 ${
                      activeImage === img
                        ? "border-brand-500 ring-2 ring-brand-500/40 scale-105"
                        : "border-white/15 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Miniatura ${idx + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Challenge & Solution Cards (Narrativa de Diseño) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <span>El Desafío</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-brand-500/[0.04] border border-brand-500/20 space-y-1.5">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-400 flex items-center gap-1.5">
                <span>Solución & Estrategia</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Project Info & Color Palette (Like Photo Lightbox) */}
        <div className="w-full md:w-[380px] lg:w-[410px] flex-shrink-0 bg-canvas-900 border-t md:border-t-0 md:border-l border-white/10 p-6 sm:p-7 overflow-y-auto space-y-6 flex flex-col justify-between">
          
          <div className="space-y-6">
            
            {/* Header & Title */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-[10px] font-mono uppercase tracking-wider font-semibold">
                  {project.categoryLabel}
                </span>
                <span className="text-[11px] font-mono text-gray-400">
                  {project.year} • {project.clientOrContext}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-white pt-0.5 leading-snug">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Extracted Color Palette (Identical to Photo Lightbox) */}
            <div className="space-y-2.5 p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-200 flex items-center gap-1.5 font-semibold">
                  <Palette className="w-3.5 h-3.5 text-brand-400" />
                  <span>Paleta Cromática del Proyecto</span>
                </span>
              </div>

              {/* Swatch Bars with Hex Codes */}
              <div className="flex items-center gap-2 pt-1">
                {project.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => copyToClipboard(c.hex)}
                    className="group relative flex-1 h-9 rounded-lg border border-white/20 transition-transform hover:scale-110 focus:outline-none"
                    style={{ backgroundColor: c.hex }}
                    title={`Copiar ${c.name}: ${c.hex}`}
                  >
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black/80 px-1.5 py-0.5 rounded text-[9px] font-mono text-white pointer-events-none whitespace-nowrap z-30 transition-opacity">
                      {c.hex}
                    </span>
                  </button>
                ))}
              </div>

              {/* Palette names list */}
              <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px] font-mono text-gray-400">
                {project.colors.map((c, i) => (
                  <div key={i} className="flex items-center gap-1.5 truncate">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    <span className="truncate">{c.name}</span>
                  </div>
                ))}
              </div>

              <p className="text-[10px] text-gray-400 font-mono text-center pt-1 border-t border-white/5">
                {copiedHex ? `¡Copiado ${copiedHex}!` : "Toca un color para copiar su código HEX"}
              </p>
            </div>

            {/* Typography Specs */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-gray-300">
                <Type className="w-3.5 h-3.5 text-cyan-400" />
                <span>Tipografías Utilizadas</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.typography.map((font, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[11px] font-mono text-gray-200"
                  >
                    {font}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables List */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-gray-300">
                <Package className="w-3.5 h-3.5 text-amber-400" />
                <span>Entregables Clave</span>
              </div>
              <ul className="space-y-1.5 text-xs text-gray-300">
                {project.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software / Tools */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-gray-300">
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                <span>Herramientas & Software</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[11px] font-mono text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Link Button (if applicable) */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs shadow-lg shadow-brand-500/20 transition-all hover:scale-103"
              >
                <span>Visitar Portal en Vivo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

          </div>

          {/* Bottom attribution */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-500">
            <span>Abraham Sucasaire</span>
            <span>{project.role}</span>
          </div>

        </div>

      </div>

      {/* Fullscreen High-Resolution Zoom Lightbox Overlay */}
      {selectedZoomImage && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200"
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
