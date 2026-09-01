"use client";

import React, { useState } from "react";
import { DESIGN_PROJECTS } from "@/data/portfolio-data";
import { DesignProject, ProjectCategory } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";
import { Sparkles, Layers, Grid } from "lucide-react";

interface ProjectsSectionProps {
  onSelectProject: (project: DesignProject) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const allCategories: { id: ProjectCategory; label: string; count: number }[] = [
    { id: "all", label: "Todos los Proyectos Reales", count: DESIGN_PROJECTS.length },
    {
      id: "branding",
      label: "Branding & E-Commerce",
      count: DESIGN_PROJECTS.filter((p) => p.category === "branding").length,
    },
    {
      id: "ui-ux",
      label: "UI/UX & Plataformas Web/Móvil",
      count: DESIGN_PROJECTS.filter((p) => p.category === "ui-ux").length,
    },
  ];

  const categories = allCategories.filter((cat) => cat.id === "all" || cat.count > 0);

  const filteredProjects =
    activeCategory === "all"
      ? DESIGN_PROJECTS
      : DESIGN_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-mono text-brand-400">
              <Layers className="w-3.5 h-3.5" />
              <span>SHOWCASE DE PROYECTOS REALES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Proyectos de <br />
              <span className="text-gradient-primary">Branding, UI/UX & Sistemas</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Proyectos reales desarrollados para clientes e instituciones: branding comercial de tienda virtual Mishivel, diseño editorial de diplomas UNAP OTI, portal web de Sedes UNAP y app móvil financiera en Flutter/Kotlin.
            </p>
          </div>

          <div className="text-xs font-mono text-gray-400">
            Mostrando <span className="text-white font-bold">{filteredProjects.length}</span> proyectos reales
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25 scale-105"
                  : "glass-panel text-gray-300 hover:text-white hover:border-white/20"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeCategory === cat.id ? "bg-black/20 text-white" : "bg-white/10 text-gray-400"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Project Grid (2x2 Balanced Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
