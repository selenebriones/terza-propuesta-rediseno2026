# Terza — Propuesta de rediseño 2026

Sitio en Astro + Tailwind v4, con GSAP/ScrollTrigger, Swiper y Phosphor Icons por CDN: la home y el catálogo de productos.

```bash
npm install
npm run dev   # http://localhost:4340
```

- `src/layouts/Layout.astro`: `<head>`, favicon, fuentes y CDNs. `PageLayout.astro` lo usa en las páginas internas con header y footer.
- `src/components/SiteHeader.astro`: barra lateral, header con mega menú, menú móvil por niveles y buscador (con su script).
- `src/components/SiteFooter.astro` y `src/data/site.ts`: footer, menú, redes y enlaces del menú al catálogo.
- `src/data/search.ts`: índice del buscador (categorías y familias del catálogo, colecciones y secciones).
- `src/pages/index.astro`: secciones de la home y sus animaciones.
- `src/styles/global.css`: paleta `terza-*` en `@theme` y componentes (`.btn-lime`, `.eyebrow`).

## Catálogo

Viene del catálogo público de terza.com (`/storage/search-file.json`, el mismo índice que usa su buscador): 817 productos en 12 categorías. Tapetes e híbridos no se incluyen porque terza.com no los publica en su catálogo.

- `/catalogo`: categorías agrupadas como el menú (Pisos, Alfombras, Muros, Persianas, Exterior, Accesorios).
- `/catalogo/<categoria>`: listado con los mismos filtros que terza.com. Los filtros se leen de la URL (`?estilo=Bilbao`), así el menú abre la categoría ya filtrada.
- `/catalogo/<categoria>/<sku>`: ficha con galería, información técnica, colores de la misma familia, "Solicitar cotización" y compartir.

Para actualizarlo con lo que haya en terza.com:

```bash
node scripts/importar-catalogo.mjs
```

El script reescribe `src/data/catalogo.json` y baja solo las fotos nuevas a `public/assets/catalogo/` (1000 px para la ficha y 400 px en `sm/` para tarjetas y muestras, en WebP). Las categorías, filtros, nombres y etiquetas de la ficha se definen al inicio del script.

## Pendientes

- **Imágenes:** todo lo que está en `public/assets/images/*.jpg` es un placeholder (dice "PLACEHOLDER" en la esquina). Para reemplazarlas, usa el mismo nombre de archivo.
- **Cifras:** "+10k proyectos" y "Desde 1979" son estimaciones a partir de "+45 años". Hay que validarlas.
- **Enlaces:** el visualizador y el blog apuntan a `#`.
- **ShawContract:** el botón "Conoce más" y las tarjetas apuntan a `#`.
- **Cotización:** el botón de la ficha lleva a la sección de contacto de la home; no hay formulario conectado.
- **Fuente de títulos:** Roobert (Displaay) se carga local desde `public/assets/Fonts/`. Es la versión **TRIAL**: sirve para la propuesta, pero antes de publicar hay que comprar la licencia web y cambiar el archivo (de preferencia en `.woff2`).
