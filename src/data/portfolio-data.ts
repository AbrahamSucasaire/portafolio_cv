import { DesignProject, PhotoItem, SkillCategory, ExperienceItem, EducationItem } from "@/types/portfolio";

export const PERSONAL_INFO = {
  name: "Willy Abraham Sucasaire Coaquira",
  displayName: "Abraham Sucasaire",
  roleTitle: "Mid-Level Developer • Marketing, Fotografía & Diseño",
  tagline: "Ingeniería de software, marketing digital y fotografía con auténtica pasión por el diseño gráfico.",
  bio: "Desarrollador de software Mid-Level con perfil multidisciplinario. Combino la solidez del desarrollo Full Stack y móvil (.NET, Next.js, Flutter) con estrategias de marketing digital y e-commerce, dirección de arte en fotografía con Lightroom, herramientas de IA y una genuina pasión por el diseño gráfico y la identidad de marca.",
  shortBio: "Ingeniero y desarrollador mid-level con experiencia en marketing digital, fotografía en Lightroom y pasión por el diseño gráfico.",
  location: "Arequipa & Puno, Perú",
  email: "willyabrahamsucasaire@gmail.com",
  phone: "+51 963 530 811",
  whatsappUrl: "https://wa.me/51963530811?text=Hola%20Abraham,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad.",
  linkedin: "https://linkedin.com/in/abraham-sucasaire-coaquira",
  github: "https://github.com/abrahamsucasaire",
  profileImage: "/photos/willy-abraham-profile.jpg",
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Avanzado (B2 - Centro Cultural Peruano Norteamericano)" }
  ],
  stats: [
    { label: "Experiencia en Desarrollo & Aplicaciones", value: "Mid-Level" },
    { label: "Fotos procesadas en Lightroom", value: "+50" },
    { label: "Uso de Herramientas de IA", value: "Activo" },
    { label: "Enfoque Profesional", value: "Híbrido" }
  ]
};

export const DESIGN_PROJECTS: DesignProject[] = [
  {
    id: "unap-oti-certificados-plataforma",
    title: "UNAP OTI — Gestor de Cursos & Creador Visual de Certificados",
    subtitle: "Diseño editorial de diplomas oficiales, editor interactivo en tiempo real y UI en modo oscuro",
    category: "ui-ux",
    categoryLabel: "UI/UX & Editorial",
    year: "2025",
    coverImage: "/projects/unap-oti-certificado-diploma.png",
    galleryImages: [
      "/projects/unap-oti-certificado-diploma.png",
      "/projects/unap-oti-editor-certificados.png",
      "/projects/unap-oti-cursos-catalogo.png",
      "/projects/unap-oti-admin-dashboard.png"
    ],
    clientOrContext: "Oficina de Tecnologías de la Información (OTI - UNAP)",
    role: "Lead UI/UX Designer & Graphic Layout Specialist",
    tools: ["Adobe Illustrator", "Photoshop", "Next.js", "Tailwind CSS", "Canvas Rendering"],
    summary: "Diseño integral de la plataforma de capacitación y emisión de diplomas de la Universidad Nacional del Altiplano. Abarca el diseño gráfico del certificado oficial con sellos vectoriales, cintas doradas y QR de autenticidad, además de un editor visual en tiempo real para personalizar tipografías, colores y coordenadas de impresión.",
    challenge: "Estandarizar la emisión de certificados universitarios oficiales con acabado editorial de lujo que pudiera ser modificado y renderizado dinámicamente por administradores sin romper la jerarquía visual.",
    solution: "Diseño de un layout de diploma de alta fidelidad con proporciones clásicas y tipografía solemne, integrado con un dashboard analítico en modo oscuro y un módulo interactivo de customización visual.",
    colors: [
      { name: "Azul OTI Institucional", hex: "#01176F" },
      { name: "Oro de Honor", hex: "#D4AF37" },
      { name: "Cian Acento", hex: "#00F0FF" },
      { name: "Azul Medianoche", hex: "#0B132B" }
    ],
    typography: ["Roboto Slab", "Plus Jakarta Sans", "Inter"],
    deliverables: [
      "Diseño de Plantilla Oficial de Certificado (Vectorial & PDF)",
      "Constructor visual interactivo de diplomas con coordenadas X/Y",
      "Catálogo de Cursos en Modo Oscuro con sistema de etiquetas y badges",
      "Dashboard de Métricas e Ingresos para administradores"
    ],
    featured: true
  },
  {
    id: "unap-portal-redesign",
    title: "Universidad Nacional del Altiplano — Portal de Sedes & Marca Digital",
    subtitle: "Diseño visual, jerarquía institucional y experiencia web",
    category: "ui-ux",
    categoryLabel: "UI/UX & Web",
    year: "2025",
    coverImage: "/projects/unap-sedes-screenshot.png",
    galleryImages: [
      "/projects/unap-sedes-screenshot.png",
      "/projects/unap-sedes-escuelas.png",
      "/photos/photo-torre-unap.jpg"
    ],
    clientOrContext: "Universidad Nacional del Altiplano (UNAP)",
    role: "Diseñador UI & Frontend Developer",
    tools: ["Adobe Illustrator", "Photoshop", "Next.js", "Tailwind CSS"],
    summary: "Diseño visual, arquitectura de contenidos y puesta en producción del portal oficial de sedes de la UNAP (sedes.unap.edu.pe). Se diseñó una estructura limpia con jerarquía tipográfica institucional, módulo de citas de rectoría, mapas de sedes en Juli y Azángaro, e iconografía optimizada.",
    challenge: "Articular una gran cantidad de información universitaria dispersa en una interfaz limpia, confiable e intuitiva con identidad visual institucional oficial.",
    solution: "Diseño de grillas asimétricas con tarjetas de contenido modulares, composición limpia de titulares en alto contraste y un flujo de navegación directo.",
    colors: [
      { name: "Azul Marino Institucional", hex: "#001F54" },
      { name: "Amarillo Dorado", hex: "#D4AC0D" },
      { name: "Púrpura Acento", hex: "#7D3C98" },
      { name: "Blanco Fondo", hex: "#FFFFFF" }
    ],
    typography: ["Plus Jakarta Sans", "Inter"],
    deliverables: [
      "Portal web oficial en producción (https://sedes.unap.edu.pe)",
      "Sistema de componentes de interfaz y jerarquía tipográfica",
      "Piezas gráficas para difusión y banners institucionales",
      "Activos vectoriales optimizados para web"
    ],
    featured: true,
    liveUrl: "https://sedes.unap.edu.pe/"
  },
  {
    id: "mis-gastos-flutter-app",
    title: "Mis Gastos — App Móvil UI/UX & Gestión Financiera",
    subtitle: "Maquetación ágil en Flutter (Modo Oscuro), widgets nativos en Kotlin y sincronización con Google Drive",
    category: "ui-ux",
    categoryLabel: "UI/UX & Mobile App",
    year: "2026",
    coverImage: "/projects/mis-gastos-dashboard.jpg",
    galleryImages: [
      "/projects/mis-gastos-dashboard.jpg",
      "/projects/mis-gastos-transaccion.jpg",
      "/projects/mis-gastos-temas-graficos.jpg"
    ],
    clientOrContext: "Aplicación Móvil Personal & Arquitectura de Software",
    role: "Diseñador UI/UX & Desarrollador Flutter / Kotlin",
    tools: ["Flutter", "Dart", "Kotlin (Android Widgets)", "Google Drive API", "Dark Mode UI"],
    summary: "Diseño integral de interfaz móvil y arquitectura de software para el control de finanzas personales. Implementada en Flutter con una interfaz moderna de alto contraste en modo oscuro, widgets nativos para Android en Kotlin y sincronización automática de reportes a la nube con Google Drive.",
    challenge: "Diseñar un flujo de registro de gastos ágil y sin fricciones, con jerarquía visual de saldos y un sistema de personalización de temas cromáticos dinámicos (Azul, Menta, Lila, Durazno, Rosa).",
    solution: "Estructura visual modular con tarjetas de balance interactivo, segmentación de categorías con iconos visuales, gráficos circulares de distribución presupuestaria y hojas modales inferiores (bottom sheets) para entrada rápida de datos.",
    colors: [
      { name: "Canvas Dark", hex: "#111622" },
      { name: "Card Surface", hex: "#1C2433" },
      { name: "Accent Blue", hex: "#1A73E8" },
      { name: "Positive Emerald", hex: "#1E824C" },
      { name: "Expense Coral", hex: "#D9534F" }
    ],
    typography: ["Roboto", "Inter", "Google Sans"],
    deliverables: [
      "Diseño de interfaz móvil en modo oscuro con paletas cromáticas intercambiables",
      "Arquitectura de componentes reactivos y animaciones en Flutter",
      "Widgets nativos de pantalla de inicio desarrollados en Kotlin",
      "Módulo de exportación, reportes y respaldo en Google Drive API"
    ],
    featured: true
  },
  {
    id: "mishivel-fashion-branding",
    title: "MISHIVEL — Identidad de Marca & Social Media E-Commerce",
    subtitle: "Brandboard completo, diseño de imagotipo, piezas publicitarias y catálogo para tienda virtual",
    category: "branding",
    categoryLabel: "Branding & Social Commerce",
    year: "2026",
    coverImage: "/projects/mishivel-brandboard-manual.jpg",
    galleryImages: [
      "/projects/mishivel-brandboard-manual.jpg",
      "/projects/mishivel-banner-facebook.jpg",
      "/projects/mishivel-logo-emblema.jpg",
      "/projects/mishivel-flyer-pulseras.jpg",
      "/projects/mishivel-facebook-marketplace.jpg",
      "/projects/mishivel-aretes-producto.jpg",
      "/projects/mishivel-foto-producto.jpg"
    ],
    clientOrContext: "Mishivel Store (E-Commerce de Moda & Accesorios)",
    role: "Diseñador Gráfico & Creador de Identidad Visual",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Brand Strategy", "Social Media Design"],
    summary: "Desarrollo integral del sistema de identidad visual, manual de marca y piezas publicitarias para Mishivel, tienda virtual de moda, accesorios y joyería en Facebook e Instagram. El proyecto comprende desde el diseño del imagotipo (gatita con lazo kawaii) hasta la tipografía editorial, diseño de empaques (packaging), plantillas de catálogo y flyers promocionales de alta conversión para Facebook Marketplace.",
    challenge: "Crear una identidad visual dulce, estética y sofisticada (estilo Kawaii / Coquette / Fashion) que conecte emocionalmente con el público joven en redes sociales y transmita confianza en la compra online.",
    solution: "Estructuración de un brandboard con paleta cromática pastel (rosa, crema, negro carbón), jerarquía tipográfica dual (Playfair Display + Poppins), directrices de fotografía de producto con fondos limpios y piezas publicitarias con precios y badges de oferta.",
    colors: [
      { name: "Rosa Pastel", hex: "#F7B6C2" },
      { name: "Rosa Claro", hex: "#FFD6E2" },
      { name: "Crema Fondo", hex: "#FFF2E7" },
      { name: "Negro Carbón", hex: "#1A1A1A" },
      { name: "Gris Neutro", hex: "#B9B0AC" }
    ],
    typography: ["Playfair Display", "Poppins"],
    deliverables: [
      "Brandboard y manual de identidad visual de marca",
      "Diseño de imagotipo oficial y variantes de aplicación",
      "Flyers publicitarios y plantillas para Facebook Marketplace / Instagram",
      "Diseño de packaging (cajas, bolsas de envío y stickers de sellado)",
      "Fotografía comercial y retoque digital de productos con reflejos"
    ],
    featured: true
  }
];

export const PHOTOGRAPHY_SERIES: PhotoItem[] = [
  {
    id: "photo-portrait-01",
    title: "Claroscuro & Mirada Introspectiva",
    location: "Estudio / Puno",
    category: "minimalist",
    categoryLabel: "Retrato & Claroscuro",
    year: "2024",
    imageUrl: "/photos/photo-portrait-bw.jpg",
    aspectRatio: "portrait",
    description: "Estudio de iluminación direccional de alto contraste (estilo Low Key). El encuadre parcial crea una tensión psicológica y enfatiza el reflejo circular en el iris.",
    colorPalette: ["#0A0A0A", "#262626", "#525252", "#A3A3A3", "#F5F5F5"],
    exif: {
      camera: "Mirrorless Full Frame",
      lens: "50mm Prime f/1.8",
      focalLength: "50mm",
      aperture: "f/2.2",
      iso: "100",
      shutter: "1/160s",
      software: "Adobe Lightroom Classic"
    },
    gradingPhilosophy: "Conversión a blanco y negro con realce de luminancia en tonos de piel y aplastamiento de negros para una sensación de oscuridad profunda y editorial."
  },
  {
    id: "photo-portrait-02",
    title: "Composición Gestual & Encuadre Manual",
    location: "Estudio / Arequipa",
    category: "minimalist",
    categoryLabel: "Retrato & Claroscuro",
    year: "2024",
    imageUrl: "/photos/photo-portrait-hands-bw.jpg",
    aspectRatio: "portrait",
    description: "Composición dinámica donde las manos actúan como máscara visual y grilla natural, dirigiendo la mirada del espectador directamente a los ojos.",
    colorPalette: ["#121212", "#2E2E2E", "#666666", "#9E9E9E", "#E0E0E0"],
    exif: {
      camera: "Mirrorless Full Frame",
      lens: "35mm Prime f/1.4",
      focalLength: "35mm",
      aperture: "f/2.0",
      iso: "125",
      shutter: "1/200s",
      software: "Adobe Lightroom Classic"
    },
    gradingPhilosophy: "Ajuste de micro-contraste en textura de piel y control de altas luces para preservar detalles en las palmas sin perder el misterio."
  },
  {
    id: "photo-cristo-blanco",
    title: "Devoción en las Alturas — Cerro Huaynarroque",
    location: "Juliaca, Puno (3,825 msnm)",
    category: "landscape",
    categoryLabel: "Paisaje & Horizontes",
    year: "2024",
    imageUrl: "/photos/photo-cristo-blanco.jpg",
    aspectRatio: "portrait",
    description: "El monumento del Cristo Blanco alzándose sobre la colina ocre bajo un cielo azul cobalto puro. Contraste de complementarios naturales entre el azul celeste y los tonos tierra.",
    colorPalette: ["#0084D1", "#C7955F", "#8C5832", "#E8DFD1", "#3E2519"],
    exif: {
      camera: "DSLR Professional",
      lens: "24-70mm f/2.8",
      focalLength: "50mm",
      aperture: "f/8.0",
      iso: "100",
      shutter: "1/500s",
      software: "Adobe Lightroom Classic"
    },
    gradingPhilosophy: "Calibración HSL: saturación rica en canal azul para un cielo limpio de alta montaña y enriquecimiento de los amarillos/ocres de la vegetación seca."
  },
  {
    id: "photo-lago-titicaca",
    title: "Espejo del Altiplano & Ichu Dorado",
    location: "Lago Titicaca / Puno",
    category: "landscape",
    categoryLabel: "Paisaje & Horizontes",
    year: "2024",
    imageUrl: "/photos/photo-lago-titicaca.jpg",
    aspectRatio: "landscape",
    description: "La inmensidad del lago navegable más alto del mundo enmarcado por pastizales dorados de ichu en primer plano y eucaliptos andinos en el plano medio.",
    colorPalette: ["#0074B7", "#DDA15E", "#606C38", "#283618", "#EFE9E1"],
    exif: {
      camera: "Mirrorless Full Frame",
      lens: "24-105mm f/4",
      focalLength: "28mm",
      aperture: "f/9.0",
      iso: "100",
      shutter: "1/320s",
      software: "Adobe Lightroom Classic"
    },
    gradingPhilosophy: "Equilibrio triádico de color: Azul lago (#0074B7), Verde eucalipto (#606C38) y Dorado pajonal (#DDA15E). Máscara de claridad en primer plano."
  },
  {
    id: "photo-titicaca-criaderos",
    title: "Aguas Zafiro & Piscicultura Andina",
    location: "Bahía de Puno / Lago Titicaca",
    category: "color-grading",
    categoryLabel: "Color Grading (Lightroom)",
    year: "2024",
    imageUrl: "/photos/photo-titicaca-criaderos.jpg",
    aspectRatio: "portrait",
    description: "Vista en perspectiva de las estructuras flotantes sobre el azul profundo del lago, con estratos de cordillera al fondo y nubes cumulus en el horizonte.",
    colorPalette: ["#005B96", "#03396C", "#B3CDE0", "#A38655", "#4E6B41"],
    exif: {
      camera: "Mirrorless Full Frame",
      lens: "70-200mm f/4",
      focalLength: "85mm",
      aperture: "f/7.1",
      iso: "100",
      shutter: "1/400s",
      software: "Adobe Lightroom Classic"
    },
    gradingPhilosophy: "Intensificación del contraste tonal entre el agua fría y los pastos de orilla cálidos, con degradado lineal en el cielo para realzar las nubes."
  },
  {
    id: "photo-torre-unap",
    title: "Torre de Cristal & Geometría Andina",
    location: "Ciudad Universitaria UNAP / Puno",
    category: "urban",
    categoryLabel: "Urbano & Arquitectura",
    year: "2024",
    imageUrl: "/photos/photo-torre-unap.jpg",
    aspectRatio: "portrait",
    description: "Monumento a la arquitectura moderna en el altiplano. El rascacielos de vidrio azul espejado contrasta verticalmente con las terrazas y cerros áridos de fondo.",
    colorPalette: ["#0066CC", "#2C3E50", "#BD9B65", "#7D663E", "#EAF2F8"],
    exif: {
      camera: "DSLR Professional",
      lens: "24-70mm f/2.8",
      focalLength: "45mm",
      aperture: "f/8.0",
      iso: "100",
      shutter: "1/640s",
      software: "Adobe Lightroom Classic"
    },
    gradingPhilosophy: "Corrección de perspectiva geométrica y realce de reflejos en la fachada vidriada, contrastado con tonos tostados en el terreno."
  },
  {
    id: "photo-arco-colonial",
    title: "Herencia de Sillar Rojo & Cruz Colonial",
    location: "Templo Histórico / Región Puno",
    category: "urban",
    categoryLabel: "Urbano & Arquitectura",
    year: "2024",
    imageUrl: "/photos/photo-arco-colonial.jpg",
    aspectRatio: "portrait",
    description: "Arco monumental de piedra en tono carmín / teja bajo la luz rasante de la tarde. La silueta de la cruz y el campanario recortan el cielo andino con solemnidad.",
    colorPalette: ["#C0392B", "#D98880", "#2980B9", "#FAD7A0", "#512E5F"],
    exif: {
      camera: "DSLR Professional",
      lens: "50mm Prime f/1.8",
      focalLength: "50mm",
      aperture: "f/5.6",
      iso: "100",
      shutter: "1/320s",
      software: "Adobe Lightroom Classic"
    },
    gradingPhilosophy: "Curva de tonos cálida en medios tonos para resaltar la textura rugosa del sillar rojo y el techo de teja bajo sol directo."
  },
  {
    id: "photo-avion-cielo",
    title: "Vuelo Solitario & Nubes en Torbellino",
    location: "Horizonte Urbano / Juliaca",
    category: "color-grading",
    categoryLabel: "Color Grading (Lightroom)",
    year: "2024",
    imageUrl: "/photos/photo-avion-cielo.jpg",
    aspectRatio: "portrait",
    description: "Una pequeña aeronave cruzando una dramática formación nubosa en espiral sobre los techos de la ciudad. Composición cinematográfica minimalista.",
    colorPalette: ["#5D737E", "#8DA9C4", "#C6D8D3", "#1B2A41", "#33415C"],
    exif: {
      camera: "Mirrorless Full Frame",
      lens: "24-105mm f/4",
      focalLength: "35mm",
      aperture: "f/6.3",
      iso: "200",
      shutter: "1/1000s",
      software: "Adobe Lightroom Classic"
    },
    gradingPhilosophy: "Graduación de color fría y cinematográfica (estilo Teal & Steel Blue) con realce de textura en las nubes y silueteado de los techos."
  },
  {
    id: "photo-laguna-valle",
    title: "Serenidad del Valle Interandino & Laguna",
    location: "Valle Andino / Puno",
    category: "landscape",
    categoryLabel: "Paisaje & Horizontes",
    year: "2024",
    imageUrl: "/photos/photo-laguna-valle.jpg",
    aspectRatio: "portrait",
    description: "Pastizales verdes, arbustos silvestres y eucaliptos rodeando una tranquila laguna de montaña. Una oda visual a la naturaleza y el sosiego del campo.",
    colorPalette: ["#556B2F", "#8FBC8F", "#BDB76B", "#4682B4", "#D2B48C"],
    exif: {
      camera: "DSLR Professional",
      lens: "16-35mm f/2.8",
      focalLength: "20mm",
      aperture: "f/10",
      iso: "100",
      shutter: "1/250s",
      software: "Adobe Lightroom Classic"
    },
    gradingPhilosophy: "Tratamiento orgánico de verdes y amarillos silvestres, preservando la luz difusa del cielo nublado."
  },
  {
    id: "photo-perrito-bokeh",
    title: "Compañero Fiel & Calidez Callejera",
    location: "Centro Histórico",
    category: "minimalist",
    categoryLabel: "Retrato & Desenfoque",
    year: "2024",
    imageUrl: "/photos/photo-perrito-bokeh.jpg",
    aspectRatio: "portrait",
    description: "Retrato cercano con lente luminoso. El suave desenfoque de fondo enmarca la expresión alegre y viva del perro sobre el empedrado.",
    colorPalette: ["#A08060", "#D0B080", "#503020", "#80A0C0", "#F0E0D0"],
    exif: {
      camera: "Prime Lens f/1.8",
      lens: "50mm f/1.8",
      focalLength: "50mm",
      aperture: "f/2.0",
      iso: "100",
      shutter: "1/800s",
      software: "Adobe Lightroom Classic"
    },
    gradingPhilosophy: "Realce de nitidez en pelaje y ojos, balance de blancos cálido y desenfoque óptico cremoso."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Fotografía & Colorimetría en Lightroom",
    subtitle: "Pasión activa por la captura de paisajes, luz natural y edición cromática",
    iconName: "Palette",
    skills: [
      { name: "Fotografía de Paisaje & Urbana", level: "Composición & Captura", description: "Sensibilidad por la luz natural, encuadres andinos y texturas de alta montaña.", percentage: 80, badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10" },
      { name: "Adobe Lightroom Classic", level: "Color Grading & Revelado", description: "Calibración de balance de blancos, curvas tonales y tratamiento cromático.", percentage: 85, badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10" },
      { name: "Adobe Photoshop", level: "Retoque & Composición", description: "Ajustes de imagen, fotomontajes sencillos, recorte y preparación visual.", percentage: 65, badgeColor: "border-blue-500/30 text-blue-400 bg-blue-500/10" },
      { name: "Adobe Illustrator", level: "Trazos & Vectorial", description: "Creación de trazos vectoriales esenciales, logos y diagramación geométrica.", percentage: 65, badgeColor: "border-orange-500/30 text-orange-400 bg-orange-500/10" },
      { name: "Edición Audiovisual (CapCut)", level: "Clips & Contenido", description: "Creación y montaje de clips dinámicos para difusión en plataformas digitales.", percentage: 65, badgeColor: "border-pink-500/30 text-pink-400 bg-pink-500/10" }
    ]
  },
  {
    title: "Inteligencia Artificial & Herramientas Creativas",
    subtitle: "Uso activo de modelos generativos aplicados a la creación visual y aceleración conceptual",
    iconName: "Sparkles",
    skills: [
      { name: "Generación de Imágenes con IA", level: "Prompt Craft & Síntesis", description: "Modelos generativos (Nano Banana, difusión) para acelerar conceptos y visuales de impacto.", percentage: 85, badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10" },
      { name: "IA Aplicada a Ideación Visual", level: "Flujo de Concepto", description: "Integración de prompts para maquetación rápida y pruebas de identidad visual.", percentage: 80, badgeColor: "border-violet-500/30 text-violet-400 bg-violet-500/10" },
      { name: "Curaduría & Retoque Asistido", level: "Refinamiento Gráfico", description: "Selección, escalado de resolución y retoque estético de imágenes generadas.", percentage: 78, badgeColor: "border-teal-500/30 text-teal-400 bg-teal-500/10" },
      { name: "Adopción de Nuevas Herramientas", level: "Exploración Continua", description: "Integración ágil de nuevas tecnologías creativas en el flujo de trabajo.", percentage: 80, badgeColor: "border-purple-500/30 text-purple-400 bg-purple-500/10" }
    ]
  },
  {
    title: "Desarrollo de Software & Creative Tech",
    subtitle: "Nivel Mid-Level con sólida experiencia en arquitectura, frontend y backend",
    iconName: "Layers",
    skills: [
      { name: "Desarrollo Full Stack (React / Next.js)", level: "Nivel Mid-Level", description: "Construcción de interfaces web de alto rendimiento, componentes interactivos y diseño responsivo.", percentage: 85, badgeColor: "border-sky-500/30 text-sky-400 bg-sky-500/10" },
      { name: "Desarrollo Móvil (Flutter / Dart & Kotlin)", level: "UI Rápida & Widgets", description: "Maquetación ágil en Flutter, widgets nativos para Android en Kotlin y sincronización con Google Drive API.", percentage: 82, badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10" },
      { name: "Backend (.NET C# / Java Spring Boot)", level: "Nivel Mid-Level", description: "Arquitecturas limpias, APIs RESTful, integración de sistemas y servicios escalables.", percentage: 80, badgeColor: "border-blue-500/30 text-blue-400 bg-blue-500/10" },
      { name: "Bases de Datos (PostgreSQL, SQL Server)", level: "Modelado & Consultas", description: "Modelado relacional, consultas optimizadas, integridad de datos y rendimiento.", percentage: 82, badgeColor: "border-indigo-500/30 text-indigo-400 bg-indigo-500/10" },
      { name: "Diseño UI/UX & Design Systems", level: "Diseño Funcional", description: "Estructuración de interfaces intuitivas en modo oscuro, jerarquía de información y accesibilidad.", percentage: 80, badgeColor: "border-purple-500/30 text-purple-400 bg-purple-500/10" }
    ]
  },
  {
    title: "Gestión, Análisis & Comunicación",
    subtitle: "Fundamentos analíticos e idioma profesional (del CV)",
    iconName: "CheckCircle",
    skills: [
      { name: "Data Analytics & Gestión", level: "Diplomado CIP (384 hrs)", description: "Comprensión de métricas, análisis de información y toma de decisiones fundamentadas.", percentage: 80, badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10" },
      { name: "Metodologías Ágiles (Scrum)", level: "Práctica Profesional", description: "Gestión de tareas, trabajo en equipo interdisciplinario y entregas continuas.", percentage: 82, badgeColor: "border-blue-500/30 text-blue-400 bg-blue-500/10" },
      { name: "Inglés Nivel B2 (Avanzado)", level: "Centro Cultural Peruano Norteamericano", description: "Capacidad de lectura técnica, comunicación profesional y consumo de recursos globales.", percentage: 85, badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10" },
      { name: "Pensamiento Analítico & Resolución", level: "Competencia Clave", description: "Capacidad para estructurar problemas complejos y encontrar soluciones eficientes.", percentage: 85, badgeColor: "border-purple-500/30 text-purple-400 bg-purple-500/10" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Desarrollador Full Stack & Diseñador UI/UX",
    company: "Universidad Nacional del Altiplano (UNAP)",
    period: "Agosto 2025 – Diciembre 2025",
    location: "Puno, Perú",
    highlights: [
      "Diseñó la identidad visual y portal web oficial de Sedes (https://sedes.unap.edu.pe/).",
      "Lideró la estandarización gráfica e interfaces de usuario para plataformas universitarias con alta concurrencia.",
      "Optimizó la arquitectura de información y jerarquía tipográfica para facilitar la navegación a miles de estudiantes.",
      "Coordinó con autoridades institucionales para asegurar la coherencia de marca oficial."
    ],
    skills: ["Diseño UI/UX", "Adobe Illustrator", "Next.js", "React.js", "Arquitectura Visual"]
  },
  {
    role: "Diseñador Gráfico & Desarrollador Web Independiente",
    company: "Freelance / Estudio Propio",
    period: "Abril 2020 – Actualidad",
    location: "Arequipa & Puno, Perú",
    highlights: [
      "Creación de identidades de marca completas para pequeñas y medianas empresas (PYMEs), incluyendo logotipos, paletas de color y papelería corporativa.",
      "Diseño de piezas publicitarias, carruseles de Instagram, banners para campañas de marketing digital y material promocional.",
      "Retoque fotográfico profesional y calibración de color en Adobe Lightroom para fotografía comercial y de paisaje.",
      "Despliegue y diseño de sitios web a medida con identidad visual única."
    ],
    skills: ["Branding", "Adobe Photoshop", "Adobe Lightroom", "Adobe Illustrator", "CapCut", "IA Generativa"]
  },
  {
    role: "Backend & Systems Developer",
    company: "IngenioCode",
    period: "Febrero 2024 – Julio 2024",
    location: "Arequipa, Perú",
    highlights: [
      "Modernización de infraestructura tecnológica y módulos transaccionales para entidad financiera.",
      "Aplicación de principios SOLID y arquitecturas limpias, reforzando la disciplina metodológica y estructural.",
      "Gestión de bases de datos complejas y rendimiento de alta exigencia."
    ],
    skills: [".NET Core", "C#", "SQL Server", "Arquitectura de Software"]
  },
  {
    role: "Diseñador & Desarrollador Portal de Admisión",
    company: "Universidad Nacional del Altiplano (UNAP)",
    period: "Enero 2023 – Junio 2023",
    location: "Puno, Perú",
    highlights: [
      "Diseño visual y conceptual del portal web de Admisión universitaria.",
      "Mejora continua del proceso visual de inscripción y simplificación de flujos para postulantes.",
      "Creación de piezas gráficas informativas y de soporte al usuario."
    ],
    skills: ["Diseño de Interfaces", "Diseño Gráfico", "Gestión de TI"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Maestría en Ciencias de la Computación (En curso – 2do Año)",
    institution: "Universidad Nacional de San Agustín (UNSA)",
    period: "2024 – Presente",
    location: "Arequipa, Perú",
    detail: "Enfoque en inteligencia artificial aplicada, visión por computadora y modelos avanzados de procesamiento."
  },
  {
    degree: "Bachiller en Ingeniería de Sistemas",
    institution: "Universidad Nacional del Altiplano (UNAP)",
    period: "2015 – 2020",
    location: "Puno, Perú",
    honor: "Logro: Tercio Superior",
    detail: "Formación integral en diseño de sistemas, modelado abstracto, gestión de proyectos y tecnología."
  },
  {
    degree: "Diplomado de Especialización en Data Analytics aplicado a la Gestión",
    institution: "Colegio de Ingenieros del Perú (CIP)",
    period: "Diciembre 2023 – Marzo 2024",
    location: "Perú",
    detail: "384 horas académicas. Enfoque en algoritmos de IA, visualización de datos y analítica predictiva."
  },
  {
    degree: "Inglés Nivel Superior (B2)",
    institution: "Centro Cultural Peruano Norteamericano",
    period: "Finalizado 2019",
    location: "Perú"
  }
];

export const VALUE_PROPOSITIONS = [
  {
    title: "Ojo Fotográfico & Dirección Cromática",
    description: "Mi experiencia en Adobe Lightroom y fotografía de paisajes me da un dominio intuitivo de la luz, el balance de blancos, las curvas de tono y la armonía cromática en cada diseño.",
    icon: "Camera"
  },
  {
    title: "Pensamiento de Sistema (Brand Systems)",
    description: "No creo diseños aislados: construyo sistemas visuales coherentes, escalables y adaptables a cualquier soporte (impreso, editorial, redes sociales o producto digital).",
    icon: "Boxes"
  },
  {
    title: "El Puente entre Diseño y Realidad Técnica",
    description: "Al comprender el desarrollo web y los formatos digitales, entrego artes listos para producción con tamaños óptimos, resoluciones perfectas y vectores limpios sin fricción con los desarrolladores.",
    icon: "Code2"
  },
  {
    title: "IA Generativa Aplicada con Criterio Estético",
    description: "Integro herramientas de última generación (Nano Banana, modelos de difusión) como aceleradores creativos, manteniendo siempre el control de calidad, la composición y el acabado humano refinado.",
    icon: "Wand2"
  }
];
