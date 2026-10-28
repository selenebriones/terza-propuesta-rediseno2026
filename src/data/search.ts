// Índice del buscador: categorías y familias del catálogo, colecciones del menú y secciones de la página
import { menu } from './site';
import catalogo from './catalogo.json';

type SearchEntry = { title: string; cat: string; href: string };

// Una entrada por familia (p. ej. "Bilbao" en pisos vinílicos) que lleva a su primer producto
const familias = new Map<string, { p: (typeof catalogo.productos)[number]; colores: number }>();
for (const p of catalogo.productos) {
  const clave = `${p.categoria}|${p.familia}`;
  const actual = familias.get(clave);
  if (actual) actual.colores++;
  else familias.set(clave, { p, colores: 1 });
}
const nombreCategoria = (slug: string) => catalogo.categorias.find((c) => c.slug === slug)!.nombre;

export const searchIndex: SearchEntry[] = [
  ...catalogo.categorias.map((c) => ({ title: c.nombre, cat: `Catálogo · ${c.total} productos`, href: `/catalogo/${c.slug}` })),
  ...[...familias.values()].map(({ p, colores }) => ({
    title: p.familia,
    cat: `${nombreCategoria(p.categoria)} · ${colores} ${colores === 1 ? 'color' : 'colores'}`,
    href: `/catalogo/${p.categoria}/${p.slug}`,
  })),
  ...menu.flatMap((item) =>
    item.groups.flatMap((group) =>
      group.items.map((it: any) => ({ title: it.name, cat: `${item.label} · ${group.title}`, href: it.href })),
    ),
  ),
  { title: 'Decorador virtual', cat: 'Herramientas', href: '/#visualizador' },
  { title: 'ShawContract', cat: 'Proyectos comerciales', href: '/#shawcontract' },
  { title: 'Quiero ser distribuidor', cat: 'Distribuidores', href: '/#distribuidores' },
  { title: 'Blog e ideas', cat: 'Inspiración', href: '/#ideas' },
  { title: 'Contacto', cat: 'Atención a clientes · 800 228 3792', href: '/#contacto' },
];
