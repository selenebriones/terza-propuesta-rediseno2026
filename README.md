# Terza — Propuesta de rediseño 2026

Landing de inicio en Astro + Tailwind v4, con GSAP/ScrollTrigger, Swiper y Phosphor Icons por CDN.

```bash
npm install
npm run dev   # http://localhost:4340
```

- `src/layouts/Layout.astro`: `<head>`, fuentes y CDNs.
- `src/pages/index.astro`: secciones (header con mega menú, hero, Flexiroc, nosotros, visualizador, ideas, distribuidores, footer) y animaciones.
- `src/styles/global.css`: paleta `terza-*` en `@theme` y componentes (`.btn-lime`, `.eyebrow`).

## Pendientes

- **Imágenes:** todo lo que está en `public/assets/images/*.jpg` es un placeholder (dice "PLACEHOLDER" en la esquina). Para reemplazarlas, usa el mismo nombre de archivo.- **Nombres de los tonos de Flexiroc:** Arenisca y Caliza vienen del brief; Pizarra, Travertino, Cantera y Basalto son propuestos y hay que confirmarlos.
- **Cifras:** "+10k proyectos" y "Desde 1979" son estimaciones a partir de "+45 años". Hay que validarlas.
- **Enlaces:** las redes sociales, el visualizador, las categorías y el blog apuntan a `#`.
- **Logo:** `terza-icon.svg` es un ícono provisional.
- **ShawContract:** el botón "Conoce más" y las tarjetas apuntan a `#`.
- **Fuente de títulos:** Roobert (Displaay) se carga local desde `public/assets/Fonts/`. Es la versión **TRIAL**: sirve para la propuesta, pero antes de publicar hay que comprar la licencia web y cambiar el archivo (de preferencia en `.woff2`).
