"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";
import { Palette, Sparkles, Layers, CheckCircle, Award } from "lucide-react";

export default function SkillsMatrix() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Palette": return <Palette className="w-5 h-5 text-brand-600 dark:text-brand-400" />;
      case "Sparkles": return <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case "Layers": return <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case "CheckCircle": return <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default: return <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <section id="habilidades" className="py-24 relative bg-black/[0.02] dark:bg-canvas-900/30 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-600 dark:text-purple-400">
            <Palette className="w-3.5 h-3.5" />
            <span>ARSENAL CREATIVO & SOFTWARE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Matriz de Habilidades & <br />
            <span className="text-gradient-purple">Herramientas Creativas</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Enfoque híbrido: pasión fotográfica y colorimetría en Lightroom, uso activo de IA generativa, solidez técnica en desarrollo de software y gestión ágil.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl glass-panel border border-black/10 dark:border-white/10 hover:border-brand-500/30 transition-all duration-300 flex flex-col gap-6 shadow-xl bg-white dark:bg-canvas-900/60"
            >
              {/* Category Title */}
              <div className="flex items-start gap-4 pb-2 border-b border-black/5 dark:border-white/5">
                <div className="p-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 shadow-inner">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-3.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 transition-colors space-y-1.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                          skill.badgeColor || "border-black/20 dark:border-white/20 text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
