"use client";

import React from "react";
import { DesignProject } from "@/types/portfolio";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: DesignProject;
  onSelect: (project: DesignProject) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative rounded-3xl overflow-hidden bg-white dark:bg-canvas-900/60 border border-slate-200/80 dark:border-white/10 hover:border-brand-500/50 transition-all duration-500 cursor-pointer flex flex-col h-full shadow-xl shadow-slate-900/[0.05] hover:shadow-2xl hover:shadow-brand-500/15 hover:-translate-y-2"
    >
      {/* Image Area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white uppercase tracking-wider shadow-md">
            {project.categoryLabel}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[11px] font-mono text-white shadow-md">
            {project.year}
          </span>
        </div>

        {/* Floating Quick Action */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4 bg-white dark:bg-transparent">
        <div className="space-y-2">
          <div className="text-xs font-mono text-brand-600 dark:text-brand-400 font-semibold tracking-wide">
            {project.clientOrContext}
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Palette & Tools Footer */}
        <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-2">
          {/* Swatches */}
          <div className="flex items-center gap-1.5" title="Paleta de color del proyecto">
            {project.colors.slice(0, 4).map((c, i) => (
              <span
                key={i}
                className="w-4 h-4 rounded-full border border-black/10 dark:border-white/20 shadow-sm"
                style={{ backgroundColor: c.hex }}
                title={`${c.name}: ${c.hex}`}
              />
            ))}
          </div>

          {/* Tools List */}
          <div className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400 font-mono">
            <span>{project.tools[0]}</span>
            {project.tools.length > 1 && (
              <span className="text-gray-400 dark:text-gray-500">+{project.tools.length - 1}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
