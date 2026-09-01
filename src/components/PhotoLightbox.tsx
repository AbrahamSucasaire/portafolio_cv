"use client";

import React, { useEffect, useState } from "react";
import { PhotoItem } from "@/types/portfolio";
import { X, ChevronLeft, ChevronRight, Camera, Copy, Check, Sliders, MapPin, Sparkles } from "lucide-react";

interface PhotoLightboxProps {
  photo: PhotoItem | null;
  photosList: PhotoItem[];
  onClose: () => void;
  onSelectPhoto: (photo: PhotoItem) => void;
}

export default function PhotoLightbox({
  photo,
  photosList,
  onClose,
  onSelectPhoto,
}: PhotoLightboxProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    if (photo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [photo, onClose]);

  if (!photo) return null;

  const currentIndex = photosList.findIndex((p) => p.id === photo.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photosList.length;
    onSelectPhoto(photosList[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + photosList.length) % photosList.length;
    onSelectPhoto(photosList[prevIndex]);
  };

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Container */}
      <div className="relative w-full max-w-6xl max-h-[95vh] overflow-hidden bg-canvas-900 border border-white/15 rounded-3xl shadow-2xl z-10 flex flex-col md:flex-row">
        
        {/* Close Button Floating */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-colors"
          aria-label="Cerrar visor"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-transform hover:scale-110 hidden sm:flex items-center justify-center"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-transform hover:scale-110 hidden sm:flex items-center justify-center md:right-[380px]"
          aria-label="Siguiente foto"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Left: Big Media Viewport */}
        <div className="relative flex-grow flex items-center justify-center bg-black/95 p-4 sm:p-8 min-h-[350px] md:min-h-[550px]">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
          />
        </div>

        {/* Right: Lightroom & Art Direction Specs */}
        <div className="w-full md:w-[380px] flex-shrink-0 bg-canvas-900 border-t md:border-t-0 md:border-l border-white/10 p-6 sm:p-8 overflow-y-auto space-y-6 flex flex-col justify-between">
          
          <div className="space-y-6">
            {/* Header info */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono uppercase tracking-wider">
                  {photo.categoryLabel}
                </span>
                <span className="text-[11px] font-mono text-gray-400">
                  {currentIndex + 1} de {photosList.length}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white pt-1">
                {photo.title}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-brand-400" />
                <span>{photo.location}</span>
                <span>•</span>
                <span>{photo.year}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {photo.description}
            </p>

            {/* Extracted Color Palette */}
            <div className="space-y-2 p-4 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-300 flex items-center gap-1.5 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Paleta Cromática Extraída</span>
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                {photo.colorPalette.map((hex, i) => (
                  <button
                    key={i}
                    onClick={() => copyToClipboard(hex)}
                    className="group relative flex-1 h-9 rounded-lg border border-white/20 transition-transform hover:scale-110 focus:outline-none"
                    style={{ backgroundColor: hex }}
                    title={`Copiar ${hex}`}
                  >
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black/80 px-1.5 py-0.5 rounded text-[9px] font-mono text-white pointer-events-none whitespace-nowrap z-30 transition-opacity">
                      {hex}
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 font-mono text-center pt-1">
                {copiedHex ? `¡Copiado ${copiedHex}!` : "Toca un color para copiar su código HEX"}
              </p>
            </div>

            {/* Lightroom Grading Philosophy */}
            <div className="p-4 rounded-2xl bg-cyan-500/[0.04] border border-cyan-500/20 space-y-1.5">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                <span>Tratamiento en Adobe Lightroom</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {photo.gradingPhilosophy}
              </p>
            </div>

            {/* EXIF Technical Specs */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2 text-xs font-mono text-gray-300">
              <div className="text-[10px] uppercase text-gray-400 tracking-wider flex items-center gap-1">
                <Camera className="w-3 h-3 text-brand-400" />
                <span>Parámetros de Captura</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                <div><span className="text-gray-500">Lente:</span> {photo.exif.lens || "35mm"}</div>
                <div><span className="text-gray-500">Focal:</span> {photo.exif.focalLength || "35mm"}</div>
                <div><span className="text-gray-500">Apertura:</span> {photo.exif.aperture || "f/2.8"}</div>
                <div><span className="text-gray-500">ISO:</span> {photo.exif.iso || "100"}</div>
                <div><span className="text-gray-500">Velocidad:</span> {photo.exif.shutter || "1/250s"}</div>
                <div><span className="text-gray-500">Software:</span> {photo.exif.software || "Lightroom"}</div>
              </div>
            </div>

          </div>

          {/* Bottom navigation helper */}
          <div className="flex sm:hidden items-center justify-between pt-4 border-t border-white/10">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-medium"
            >
              ← Anterior
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-xl bg-brand-500 text-white text-xs font-medium"
            >
              Siguiente →
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
