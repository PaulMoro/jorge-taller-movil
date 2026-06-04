# Resumen del Proyecto: Jorge Rodríguez - Servicio Técnico Especializado

Este documento detalla la información consolidada sobre el negocio de **Jorge Rodríguez**, recopilando lo que hace, su público objetivo, su valor diferencial, y cómo está estructurada técnicamente su plataforma.

---

## 👤 ¿Quién es Don Jorge Rodríguez y a qué se dedica?

**Jorge Rodríguez** es un especialista técnico y experto en ingeniería de precisión con **más de 30 años de experiencia** en el mantenimiento, reparación, afilado y calibración de herramientas profesionales de peluquería y barbería de alta gama.

### 🛠️ Lo que hace (Servicios Principales):
1. **Mantenimiento y Reparación de Secadores:** Desarmado completo, limpieza profunda de residuos y químicos, calibración de motores, escobillas y control térmico.
2. **Ajuste y Control de Planchas:** Reparación de tarjetas digitales, control de temperatura para evitar picos de calor que dañen el cabello, cambio de cables giratorios y alineación de placas (titanio/cerámica) para un sellado uniforme.
3. **Puesta a Punto de Máquinas (Clippers & Trimmers):** Calibración y alineación exacta de cuchillas, ajuste de potencia del motor y afilado profesional de alta precisión para evitar tirones y sobrecalentamientos.

---

## 🚀 Propuesta de Valor y Diferenciadores

El negocio no es un taller convencional; está enfocado en dar un soporte de élite con tres pilares fundamentales:

*   **Taller Móvil a Domicilio (Servicio In-Situ):** En lugar de que el estilista tenga que dejar su herramienta en un taller físico durante días perdiendo dinero, la unidad móvil de Jorge Rodríguez va directamente a la peluquería o barbería en Bogotá y municipios aledaños. Las herramientas se reparan en la puerta del negocio.
*   **Aliado y Respaldo de Grandes Marcas:** Socio de servicio oficial y técnico oficial autorizado de marcas líderes como **BaByliss PRO**, **Wahl**, y **Strong Machine**.
*   **Garantía y Repuestos Originales:** Empleo exclusivo de componentes de fábrica y entrega de garantías por escrito para asegurar la longevidad de las herramientas.
*   **Comunidad y Canal de WhatsApp:** Canal directo donde comparte tips rápidos de mantenimiento para estilistas, alertas de liquidación de equipos y promociones exclusivas.

---

## 🎨 Sistema de Diseño (Estética Industrial y Premium)

La web sigue una dirección visual técnica basada en **Material Design 3**:

*   **Tipografía:** 
    *   *Encabezados (Headlines) y Etiquetas:* `Space Grotesk` (geométrica, moderna, industrial).
    *   *Cuerpo de Texto (Body):* `Manrope` (limpia, altamente legible).
*   **Colores Principales:**
    *   `Primary` (Siena / Rosa Oscuro): `#C2185B`
    *   `Primary Container` (Rosa Profundo): `#921245`
    *   `On-Background` (Carbón): `#1a1c1c`
    *   `Outline Variant` (Gris Contorno): `#CFC4C5`
    *   `Surface Container Low` (Fondo Tarjetas): `#f3f3f3` / `#eeeeee`

---

## 💻 Arquitectura Tecnológica (Astro Stack)

*   **Framework:** Astro (Static Site Generation con soporte para hidratación parcial si se requiere).
*   **Estilos:** TailwindCSS (v4) integrado mediante variables en `@theme` en `src/styles/global.css`.
*   **Enrutamiento:** Cliente side routing con `<ClientRouter />` para navegación instantánea sin recargas de página.
*   **Imágenes:** Alojamiento externo optimizado en Cloudflare R2 para mantener el repositorio liviano.
