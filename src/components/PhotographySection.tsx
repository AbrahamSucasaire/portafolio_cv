"use client";

import React, { useState } from "react";
import { PHOTOGRAPHY_SERIES } from "@/data/portfolio-data";
import { PhotoCategory, PhotoItem } from "@/types/portfolio";
import { Camera, Sliders, MapPin, Eye, Sparkles } from "lucide-react";

interface PhotographySectionProps {
  onSelectPhoto: (photo: PhotoItem) => void;
}

export default function PhotographySection({ onSelectPhoto }: PhotographySectionProps) {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory>("all");

  const categories: { id: PhotoCategory; label: string }[] = [
    { id: "all", label: "Toda la Colección" },
    { id: "landscape", label: "Paisaje & Horizontes" },
    { id: "urban", label: "Urbano & Arquitectura" },
    { id: "minimalist", label: "Minimalismo & Espacio" },
    { id: "color-grading", label: "Color Grading (Lightroom)" },
  ];

  const filteredPhotos =
    activeCategory === "all"
      ? PHOTOGRAPHY_SERIES
      : PHOTOGRAPHY_SERIES.filter((p) => p.category === activeCategory);

  return (
    <section id="fotografia" className="py-24 relative bg-black/[0.02] dark:bg-canvas-900/40 border-y border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-600 dark:text-cyan-300">
              <Camera className="w-3.5 h-3.5" />
              <span>DIRECCIÓN DE ARTE & COLORIMETRÍA EN LIGHTROOM</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Sensibilidad Visual & <br />
              <span className="text-gradient-cyan">Fotografía de Paisaje</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              La fotografía es la escuela definitiva de la luz, el encuadre y la teoría del color. Cada una de estas tomas ha sido calibrada minuciosamente en <strong className="text-gray-900 dark:text-white">Adobe Lightroom</strong>, demostrando dominio en curvas tonales, armonías cromáticas y espacio negativo.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl glass-panel border border-cyan-500/20 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xs">
                Lr
              </div>
              <div className="text-left text-xs font-mono">
                <div className="text-gray-900 dark:text-white font-semibold">Adobe Lightroom</div>
                <div className="text-gray-500 dark:text-gray-400 text-[10px]">Master en Color Grading</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/20 scale-105"
                  : "glass-panel text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-black/10 dark:border-white/10 hover:border-cyan-400/40 cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-1.5 bg-white dark:bg-canvas-900/60"
            >
              {/* Photo Display */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-cyan-300">
                    {photo.categoryLabel}
                  </span>
                </div>

                {/* Inspect Trigger Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Eye className="w-4 h-4 text-cyan-300" />
                </div>

                {/* Bottom Content on Scrim */}
                <div className="absolute bottom-0 inset-x-0 p-5 space-y-2 text-white">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-300">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{photo.location}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {photo.title}
                  </h3>

                  {/* Palette Preview Swatches */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/15">
                    <div className="flex items-center gap-1">
                      {photo.colorPalette.slice(0, 4).map((hex, i) => (
                        <span
                          key={i}
                          className="w-3.5 h-3.5 rounded-full border border-white/30"
                          style={{ backgroundColor: hex }}
                          title={hex}
                        />
                      ))}
                    </div>

                    <span className="text-[10px] font-mono text-gray-300">
                      {photo.aspectRatio} • {photo.year}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
