"use client";

import React from "react";
import { DesignProject } from "@/types/portfolio";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: DesignProject;
  onSelect: (project: DesignProject) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-brand-500/40 transition-all duration-500 cursor-pointer flex flex-col h-full hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1.5"
    >
      {/* Image Area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-canvas-900">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas-950 via-canvas-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-gray-200 uppercase tracking-wider">
            {project.categoryLabel}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono text-gray-300">
            {project.year}
          </span>
        </div>

        {/* Floating Quick Action */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <div className="text-xs font-mono text-brand-400 font-medium">
            {project.clientOrContext}
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-brand-300 transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Palette & Tools Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
          {/* Swatches */}
          <div className="flex items-center gap-1.5" title="Paleta de color del proyecto">
            {project.colors.slice(0, 4).map((c, i) => (
              <span
                key={i}
                className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                style={{ backgroundColor: c.hex }}
                title={`${c.name}: ${c.hex}`}
              />
            ))}
          </div>

          {/* Tools List */}
          <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-mono">
            <span>{project.tools[0]}</span>
            {project.tools.length > 1 && (
              <span className="text-gray-500">+{project.tools.length - 1}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
