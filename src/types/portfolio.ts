export type ProjectCategory = 
  | "all"
  | "branding"
  | "editorial"
  | "advertising"
  | "ui-ux"
  | "ai-generative";

export interface ProjectColor {
  name: string;
  hex: string;
}

export interface DesignProject {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  coverImage: string;
  galleryImages: string[];
  clientOrContext: string;
  role: string;
  tools: string[];
  summary: string;
  challenge: string;
  solution: string;
  colors: ProjectColor[];
  typography: string[];
  deliverables: string[];
  featured?: boolean;
  liveUrl?: string;
}

export type PhotoCategory = "all" | "landscape" | "urban" | "minimalist" | "color-grading";

export interface PhotoItem {
  id: string;
  title: string;
  location: string;
  category: PhotoCategory;
  categoryLabel: string;
  year: string;
  imageUrl: string;
  aspectRatio?: "landscape" | "portrait" | "square";
  description: string;
  colorPalette: string[];
  exif: {
    camera?: string;
    lens?: string;
    focalLength?: string;
    aperture?: string;
    iso?: string;
    shutter?: string;
    software?: string; // "Adobe Lightroom Classic"
  };
  gradingPhilosophy: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: {
    name: string;
    level: string; // e.g. "Avanzado", "Especialista", "Dominio"
    description: string;
    percentage: number;
    badgeColor?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  honor?: string;
  detail?: string;
}
