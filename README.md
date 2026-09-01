# Portafolio Profesional — Willy Abraham Sucasaire Coaquira
> **Diseñador Gráfico & Art Director** | Especialista en Identidad Visual, Fotografía en Lightroom y Creative Tech.

Este proyecto es un portafolio web de alta gama diseñado específicamente para postular a puestos de **Diseñador Gráfico / Visual Designer**, integrando tu sensibilidad fotográfica, dominio de Adobe Suite (Photoshop, Illustrator, Lightroom), herramientas de Inteligencia Artificial y precisión técnica en **Next.js**.

---

## ✨ Características Principales

1. **Narrativa y Posicionamiento Estratégico**:
   - Presenta tu perfil como un diseñador gráfico híbrido de alto valor (sensibilidad estética + ojo fotográfico de paisaje + entendimiento técnico de sistemas).
   - Sección estelar de **Dirección de Arte & Colorimetría en Lightroom** para aprovechar tus fotos y mostrar dominio de curvas tonales, armonía cromática y composición.

2. **Showcase de Proyectos de Diseño Gráfico**:
   - Casos de estudio con filtros por categoría (*Identidad & Marca, Editorial & Posters, Publicidad & Social, UI/UX & Web, IA Generativa*).
   - Modal interactivo de Case Study con desglose del desafío, solución gráfica, tipografías, entregables y **paleta de color interactiva con copia de códigos HEX al portapapeles con un clic**.

3. **Galería Fotográfica & Lightroom Inspector**:
   - Exhibición tipo curaduría de museo con visor **Lightbox**.
   - Parámetros técnicos EXIF (Lente, Focal, Apertura, ISO, Obturación, Software) y filosofía de *color grading* aplicada.

4. **Perfil Profesional & Matriz de Habilidades (CV Integrado)**:
   - Resumen de trayectoria, logros académicos (UNAP Tercio Superior, Maestría en Ciencias de la Computación en UNSA, Diplomado en Data Analytics CIP).
   - Matriz de habilidades con porcentajes y niveles técnicos en Illustrator, Photoshop, Lightroom, Generación de Imágenes por IA (Nano Banana), Next.js, etc.

5. **Centro de Contacto Directo**:
   - Botón directo de **WhatsApp** con mensaje preconfigurado.
   - Copia de correo electrónico en un clic (`willyabrahamsucasaire@gmail.com`).
   - Formulario de contacto interactivo con selección de tipo de proyecto / vacante.

---

## 🚀 Despliegue en Vercel (Paso a Paso)

Este proyecto está 100% optimizado para **Vercel**:

1. Sube este proyecto a tu repositorio de GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of graphic design portfolio"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

2. Entra a [Vercel](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
3. Haz clic en **"Add New..."** → **"Project"**.
4. Selecciona tu repositorio recién subido.
5. Haz clic en **"Deploy"** (Vercel detectará automáticamente Next.js y configurará todo sin requerir ajustes manuales).

---

## 🎨 ¿Cómo personalizar o añadir tus propias fotos de Lightroom y diseños?

Todo el contenido del portafolio está centralizado en un solo archivo:
📁 **`src/data/portfolio-data.ts`**

### Para cambiar o añadir tus fotos de Lightroom:
Edita la constante `PHOTOGRAPHY_SERIES` en `src/data/portfolio-data.ts`:
- Puedes colocar tus fotos exportadas de Lightroom en la carpeta `/public/images/` y referenciarlas como `/images/mi-foto.jpg`, o usar enlaces de imagen directos.
- Puedes ajustar los colores de la paleta (`colorPalette: ["#1B263B", "#415A77", ...]`) y los datos de tu cámara/lente en `exif`.

### Para añadir nuevos proyectos de diseño:
Edita la constante `DESIGN_PROJECTS` en `src/data/portfolio-data.ts`.

---

## 🛠️ Comandos de Desarrollo Local

- Iniciar servidor de desarrollo:
  ```bash
  npm run dev
  ```
- Construir para producción:
  ```bash
  npm run build
  ```
- Iniciar en modo producción:
  ```bash
  npm start
  ```
