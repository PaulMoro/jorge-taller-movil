# Jorge Rodriguez - Servicio Técnico Especializado

Bienvenido al repositorio de **Jorge Rodriguez**, especialista en soporte técnico, mantenimiento y restauración de equipos profesionales de peluquería y barbería de alta gama en Bogotá, Colombia.

## 🚀 Sobre el Proyecto

Este proyecto es la presencia digital de Jorge Rodriguez, un laboratorio de ingeniería de precisión dedicado al mantenimiento de herramientas de alto nivel. La plataforma ofrece una experiencia premium para:
- Agendar mantenimientos preventivos y reparaciones técnicas.
- Explorar un catálogo curado de herramientas profesionales.
- Conocer protocolos de servicio especializados y el uso de repuestos originales.
- Consultar las políticas y garantías legales del servicio.

## 🛠️ Estado Actual

El proyecto ha completado su migración base a **Astro**. Anteriormente contábamos con maquetas funcionales en HTML puro.
Las páginas migradas y creadas son:
- `index.html` -> `src/pages/index.astro`: **FINALIZADA** (Landing page).
- `servicio.html` -> `src/pages/servicios.astro`: **FINALIZADA** (Gestión de servicios).
- `catalogo.html` -> `src/pages/catalogo.astro`: **FINALIZADA** (Catálogo premium).
- `contacto.html` -> `src/pages/contacto.astro`: **FINALIZADA** (Soporte técnico y contacto).
- Páginas Legales -> `src/pages/politicas/`: **FINALIZADAS** (Privacidad, Garantía de Productos, y Garantía de Servicio).

## 🌟 Objetivos de la Arquitectura Astro

El objetivo principal es transformar las vistas estáticas en una aplicación web moderna y espectacular. Esto nos permite:
- **Componentización:** Estructura modular con componentes reutilizables (`.astro`).
- **Rendimiento:** Carga ultrarrápida mediante *Island Architecture*.
- **SEO Avanzado:** Optimización para buscadores.
- **Experiencia Premium:** Implementación de transiciones fluidas y micro-animaciones.

## 🎨 Estado de los Estilos (Design System)

El proyecto utiliza un sistema de diseño basado en **Material Design 3** con una estética técnica e industrial.

### 🏗️ Layout y Estructura
- **Contenedor Global:** Se utiliza una clase `max-w-7xl mx-auto px-8` (o `px-margin`) para mantener la consistencia del contenido central en todas las páginas.
- **Sistema de Grilla:** Basado en el grid de 12 columnas de Tailwind para layouts complejos y responsivos.
- **Espaciado:** Se utilizan tokens de espaciado consistentes (ej. `mb-xl`, `gap-lg`, `p-md`) definidos en `global.css` para asegurar una jerarquía visual clara.

### 🧩 Componentes y Extensiones
- **Superficies:** Los componentes utilizan capas de color como `bg-surface-container-lowest` para elevar elementos sobre el `bg-background`.
- **Bordes:** Uso sistemático de `border border-outline-variant` para delimitar módulos con precisión técnica.
- **Efectos:** Micro-animaciones de escala (`active:scale-95`) y transiciones de color/escala de grises (`duration-700`) para una experiencia viva, adaptadas tanto para Desktop como para Mobile.

### 🔘 Botones (Buttons)
Existen tres estilos principales de botones:
1. **Primary:** `bg-primary text-white hover:bg-primary-container transition-all`. Usado para acciones principales (Submit, Request).
2. **Outline:** `border border-secondary text-secondary hover:bg-surface-container`. Usado para acciones secundarias (Manuales, Especificaciones).
3. **Ghost/Icon:** Botones circulares con hover suave para acciones de navegación o búsqueda.
- **Tipografía en Botones:** Siempre usan `font-label-md uppercase tracking-widest` para mantener el rigor industrial.

### 🌐 Estilos Generales
- **Tipografía:** `Space Grotesk` para todos los encabezados (Headline) y etiquetas (Label). `Manrope` para todo el cuerpo de texto (Body).
- **Paleta de Colores:** Basada en siena, carbón y tonos de gris industrial, gestionada mediante variables CSS integradas en el `@theme` de Tailwind.

## 🚀 Metodología y Flujo de Trabajo

### 🛠️ Creación de Servicios y Soporte
La migración de las páginas de **Servicios** y **Contacto** se realizó bajo un esquema de **Componentización Extrema**:
1. **Análisis de Maqueta:** Identificación de patrones visuales y bloques funcionales en el HTML original.
2. **Extracción de Módulos:** División en componentes atómicos dentro de sus respectivos directorios.
3. **Ensamblaje Semántico:** Reconstrucción de la página en el directorio `src/pages/` inyectando los componentes en el `Layout.astro` global para heredar el Header y Footer del sistema.
4. **Documentación Obligatoria:** Cada página y componente incluye un bloque de comentarios detallando su propósito, contenido e interacción.

## 🧩 Arquitectura de Componentes Críticos

### 📱 Header y Navegación Inteligente
El `Header.astro` ha sido rediseñado para ofrecer una experiencia híbrida:
- **Desktop:** Navegación limpia con eliminación del buscador innecesario para priorizar los CTAs de servicio y redirección de logotipo hacia el inicio.
- **Mobile Dropdown:** Implementación de un menú lateral interactivo que incluye enlaces de navegación, equipos destacados y lógica de toggle sin dependencias pesadas.

### 🖼️ Arquitectura de Activos (Imágenes)
Para mantener un repositorio ligero y profesional, las imágenes se alojan externamente en **Cloudflare R2**.
- **Configuración Global:** La URL base se gestiona en `src/config/site.ts` (`SITE_CONFIG.r2BaseUrl`).
- **Inyección Dinámica:** Migración de URLs estáticas a plantillas literales (`${r2BaseUrl}/...`) en componentes clave.
- **Control de Aspecto:** Estandarización de logos de marcas aliadas y ajuste del tamaño e interacciones específicamente adaptadas a pantallas móviles.

### ⚖️ Gestión de Aspectos Legales
Se creó la arquitectura y redacción de las páginas de políticas requeridas por ley en Colombia: Tratamiento de Datos Personales, Garantía de Productos, y Garantía de Servicio (Mano de Obra). Se integraron los datos dinámicos extraídos de la configuración del proyecto.

## 🔜 Próximos Pasos / Tareas Pendientes

### 🟢 Completado
- [x] **Migración Total de Páginas:** Todas las vistas principales están operativas en Astro (Inicio, Servicios, Catálogo, Contacto).
- [x] **Páginas Legales:** Estructura e implementación de políticas legales integradas al Footer.
- [x] **Integración con R2:** Imágenes servidas con optimización técnica y URLs dinámicas.
- [x] **Menú Móvil Interactivo:** Navegación optimizada para dispositivos táctiles.
- [x] **Refactorización de Contacto:** Transición exitosa del apartado "soporte" a "contacto" con actualización en los enlaces del proyecto.
- [x] **Comunidad de WhatsApp:** Integración del canal oficial de WhatsApp de Don Jorge.

### 🟡 Prioridad Media
- [ ] **Content Collections para Catálogo:** Implementar gestión mediante archivos Markdown para mayor escalabilidad.
- [ ] **Flujo de WhatsApp:** Configuración final del envío de datos desde los formularios interactivos hacia WhatsApp directamente.
