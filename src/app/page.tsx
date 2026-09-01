"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ProjectModal from "@/components/ProjectModal";
import PhotographySection from "@/components/PhotographySection";
import PhotoLightbox from "@/components/PhotoLightbox";
import AboutProfileSection from "@/components/AboutProfileSection";
import SkillsMatrix from "@/components/SkillsMatrix";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { DesignProject, PhotoItem } from "@/types/portfolio";
import { PHOTOGRAPHY_SERIES } from "@/data/portfolio-data";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<DesignProject | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  return (
    <main className="min-h-screen bg-[#F8F9FA] dark:bg-canvas-950 text-gray-900 dark:text-gray-100 selection:bg-brand-500 selection:text-white relative transition-colors duration-300">
      {/* Global Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Graphic Design Projects Showcase */}
      <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

      {/* Photography & Lightroom Art Direction Exhibition */}
      <PhotographySection onSelectPhoto={(photo) => setSelectedPhoto(photo)} />

      {/* Profile & CV Experience Details */}
      <AboutProfileSection />

      {/* Skills Matrix & Creative Software */}
      <SkillsMatrix />

      {/* Contact & Hiring Section */}
      <ContactSection />

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Photography Lightbox & Lightroom Inspector */}
      <PhotoLightbox
        photo={selectedPhoto}
        photosList={PHOTOGRAPHY_SERIES}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
      />
    </main>
  );
}
