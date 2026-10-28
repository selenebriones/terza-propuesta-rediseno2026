// Datos compartidos por todas las páginas: menú, redes, buscador y footer
import catalogo from './catalogo.json';
import { paginasLinea } from '../lib/catalogo';

// Menú principal: cada opción abre un mega menú con sus categorías y colecciones
export const menu = [
  {
    label: 'Pisos',
    intro: 'Vinílicos, laminados y de madera para cada estilo y cada ritmo de vida.',
    img: '/assets/images/banner-hero-piso-vinilico.webp',
    groups: [
      { title: 'Pisos vinílicos', items: ['Colección Bilbao', 'Colección Norwich', 'Colección Sevilla', 'Colección Vigo'] },
      { title: 'Pisos laminados', items: ['Colección Class', 'Colección Imperial Plus', 'Colección Mammut Plus', 'Colección Trend'] },
      { title: 'Pisos de madera', items: ['Colección Bari', 'Colección Cannes', 'Colección Montpellier', 'Colección Napoli 2.0'] },
    ],
  },
  {
    label: 'Alfombras',
    intro: 'Colecciones que suman calidez, confort y mejor acústica a cualquier espacio.',
    img: '/assets/images/hospitality.webp',
    groups: [
      { title: 'Colecciones', items: ['Colección Allegro', 'Colección Gladiador', 'Colección Guerrero', 'Colección Terza Kids'] },
    ],
  },
  {
    label: 'Muros',
    intro: 'Lambrín, piedra flexible y follaje para muros con carácter.',
    img: '/assets/images/banner-hero-muros-verdes.webp',
    groups: [
      { title: 'Lambrín y paneles', items: ['Lambrín en Arco', 'Lambrín Irregular', 'Panel Liso Tipo Mármol', 'Panel Liso Tipo Madera'] },
      { title: 'Flexiroc', items: ['Granito Blanco Colonial', 'Travertino Greige', 'Caliza Española', 'Roca Blanca'] },
      { title: 'Follaje artificial', items: ['Brooklyn', 'Green Boxus', 'Spring Boxus', 'Victoria'] },
    ],
  },
  {
    label: 'Persianas',
    intro: 'Control de luz y privacidad con acabados hechos a la medida.',
    groups: [
      { title: 'Persianas enrollables', items: ['Stylo', 'Optima', 'Select'] },
      { title: 'Persianas de madera', items: ['Lake Forest 2', 'Traditions 1', 'Traditions 2'] },
    ],
  },
  {
    label: 'Exterior',
    intro: 'Deck y pasto sintético para terrazas y jardines que se disfrutan todo el año.',
    img: '/assets/images/banner-hero-pasto-sintetico.webp',
    groups: [
      { title: 'Deck', items: ['Deck', 'Lambrín de Exterior', 'Vigas', 'Cladding'] },
      { title: 'Pasto sintético', items: ['Colección Bay', 'Colección Breeze', 'Colección Emerald', 'Colección Playground'] },
    ],
  },
  {
    label: 'Accesorios',
    intro: 'Todo lo necesario para instalar y mantener tus superficies.',
    groups: [
      { title: 'Para piso', items: ['Adhesivos', 'Limpiadores', 'Molduras', 'Zoclos'] },
      { title: 'Para exterior', items: ['Clips', 'Tapas', 'Tornillos', 'Vigas'] },
    ],
  },
];

// Opciones que sí se muestran en el header y en el menú móvil
export const visibleMenu = menu.filter((item) => !item.hidden);

// Foto (de los catálogos de terza.com) o ícono de cada colección del menú
const M = '/assets/images/menu';
const menuMedia = {
  'Colección Bilbao': { img: `${M}/bilbao.webp` },
  'Colección Norwich': { img: `${M}/norwich.webp` },
  'Colección Sevilla': { img: `${M}/sevilla.webp` },
  'Colección Vigo': { img: `${M}/vigo.webp` },
  'Colección Class': { img: `${M}/class.webp` },
  'Colección Imperial Plus': { img: `${M}/imperial-plus.webp` },
  'Colección Mammut Plus': { img: `${M}/mammut-plus.webp` },
  'Colección Trend': { img: `${M}/trend.webp` },
  'Colección Bari': { img: `${M}/bari.webp` },
  'Colección Cannes': { img: `${M}/cannes.webp` },
  'Colección Montpellier': { img: `${M}/montpellier.webp` },
  'Colección Napoli 2.0': { img: `${M}/napoli.webp` },
  'Colección Allegro': { img: `${M}/allegro.webp` },
  'Colección Gladiador': { img: `${M}/gladiador.webp` },
  'Colección Guerrero': { img: `${M}/guerrero.webp` },
  'Colección Terza Kids': { img: `${M}/terza-kids.webp` },
  'Lambrín en Arco': { img: `${M}/lambrin-1.webp` },
  'Lambrín Irregular': { img: `${M}/lambrin-2.webp` },
  'Panel Liso Tipo Mármol': { img: `${M}/lambrin-3.webp` },
  'Panel Liso Tipo Madera': { img: `${M}/lambrin-4.webp` },
  'Granito Blanco Colonial': { img: `${M}/granito-blanco-colonial.webp` },
  'Travertino Greige': { img: '/assets/images/flexiroc/T15-FR026-GT101.webp' },
  'Caliza Española': { img: '/assets/images/flexiroc/T15-FR026-SL107.webp' },
  'Roca Blanca': { img: `${M}/roca-blanca.webp` },
  'Brooklyn': { img: `${M}/brooklyn.webp` },
  'Green Boxus': { img: `${M}/green-boxus.webp` },
  'Spring Boxus': { img: `${M}/spring-boxus.webp` },
  'Victoria': { img: `${M}/victoria.webp` },
  'Stylo': { img: `${M}/stylo.webp` },
  'Optima': { img: `${M}/optima.webp` },
  'Select': { img: `${M}/select.webp` },
  'Lake Forest 2': { img: `${M}/lake-forest-2.webp` },
  'Traditions 1': { img: `${M}/traditions-1.webp` },
  'Traditions 2': { img: `${M}/traditions-2.webp` },
  'Deck': { img: `${M}/deck.webp` },
  'Lambrín de Exterior': { img: `${M}/lambrin-exterior.webp` },
  'Cladding': { img: `${M}/cladding.webp` },
  'Colección Bay': { img: `${M}/bay.webp` },
  'Colección Breeze': { img: `${M}/breeze.webp` },
  'Colección Emerald': { img: `${M}/emerald.webp` },
  'Colección Playground': { img: '/assets/images/banner-hero-pasto-sintetico.webp' },
  'Vigas': { icon: 'ph-columns' },
  'Adhesivos': { icon: 'ph-drop' },
  'Limpiadores': { icon: 'ph-sparkle' },
  'Molduras': { icon: 'ph-frame-corners' },
  'Zoclos': { icon: 'ph-ruler' },
  'Clips': { icon: 'ph-paperclip' },
  'Tapas': { icon: 'ph-square-half-bottom' },
  'Tornillos': { icon: 'ph-screwdriver' },
};
menu.forEach((item) =>
  item.groups.forEach((group) => {
    group.items = group.items.map((name) => ({ name, ...(menuMedia[name] ?? { icon: 'ph-squares-four' }) }));
  }),
);

export const socials = [
  { icon: 'ph-instagram-logo', label: 'Instagram', href: 'https://www.instagram.com/terzamexico/' },
  { icon: 'ph-facebook-logo', label: 'Facebook', href: 'https://www.facebook.com/TerzaMexico/' },
  { icon: 'ph-youtube-logo', label: 'YouTube', href: 'https://www.youtube.com/channel/UCnIDmz5VV5tsZ7pMiOvwa1A' },
  { icon: 'ph-linkedin-logo', label: 'LinkedIn', href: 'https://www.linkedin.com/company/terza-s-a-/' },
];

export const popularSearches = ['Pasto sintético', 'Flexiroc', 'Pisos vinílicos', 'Persianas', 'Deck', 'Alfombras'];

// Menú del footer; `sep` deja un espacio antes del enlace para separar grupos
export const footerCols = [
  {
    title: 'Productos',
    links: [
      { label: 'Pisos', href: '/catalogo#pisos' },
      { label: 'Muros', href: '/catalogo#muros' },
      { label: 'Persianas', href: '/catalogo#persianas' },
      { label: 'Exterior', href: '/catalogo#exterior' },
      { label: 'Accesorios', href: '/catalogo#accesorios' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Catálogo de productos', href: '/catalogo' },
      { label: 'Decorador Virtual', href: '/#visualizador' },
      { label: 'Material Lab', href: '#' },
      { label: 'Shaw Contract', href: '/#shawcontract' },
    ],
  },
  {
    title: 'Nosotros',
    links: [
      { label: 'Quiénes somos', href: '/#nosotros' },
      { label: 'Quiero ser distribuidor', href: '/#distribuidores' },
      { label: 'Contacto', href: '/#contacto-ubicaciones' },
      { label: 'Aviso de privacidad', href: 'https://www.terza.com/AVISO-DE-PRIVACIDAD.pdf', sep: true },
      { label: 'Buzón de Transparencia', href: 'https://www.terza.com/buzon-de-transparencia' },
    ],
  },
];

// ---------- Enlaces del menú al catálogo ----------

// Cada grupo del menú apunta a una categoría del catálogo y al filtro que corresponde a sus colecciones
const destinos: Record<string, { cat: string; campo?: string; producto?: boolean }> = {
  'Pisos vinílicos': { cat: 'piso-vinilico', campo: 'estilo' },
  'Pisos laminados': { cat: 'pisos-laminados', campo: 'estilo' },
  'Pisos de madera': { cat: 'pisos-de-madera', campo: 'estilo' },
  Colecciones: { cat: 'alfombras', campo: 'estilo' },
  'Lambrín y paneles': { cat: 'paneles', campo: 'estilo' },
  Flexiroc: { cat: 'flexiroc', producto: true },
  'Follaje artificial': { cat: 'muros-verdes', producto: true },
  'Persianas enrollables': { cat: 'persianas-enrollables', campo: 'linea' },
  'Persianas de madera': { cat: 'persianas-de-madera', campo: 'coleccion' },
  Deck: { cat: 'pisos-deck', campo: 'estilo' },
  'Pasto sintético': { cat: 'pasto-sintetico', campo: 'estilo' },
  'Para piso': { cat: 'accesorios', campo: 'tipo' },
  'Para exterior': { cat: 'accesorios', campo: 'tipo' },
};

// Nombres del menú que no coinciden con el valor del filtro en el catálogo
const equivalencias: Record<string, string> = {
  'Lambrín en Arco': 'Lambrin',
  'Lambrín Irregular': 'Lambrin Irregular',
  'Panel Liso Tipo Mármol': 'Panel Marble',
  'Panel Liso Tipo Madera': 'Panel',
  'Lambrín de Exterior': 'Lambrin Deck',
  Cladding: 'Fachada Exterior',
  Adhesivos: 'Adhesivo',
  Molduras: 'Accesorios Piso Laminado',
  Zoclos: 'Accesorios Piso Laminado',
  Clips: 'Accesorios Deck',
  Tapas: 'Accesorios Deck',
  Tornillos: 'Accesorios Deck',
};

const normalizar = (t: string) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

const hrefColeccion = (grupo: string, nombre: string) => {
  // Las vigas están en el catálogo de lambrín y paneles
  if (nombre === 'Vigas') return '/catalogo/paneles?estilo=Viga';
  const d = destinos[grupo];
  if (!d) return '/catalogo';
  if (d.producto) {
    const p = catalogo.productos.find((x) => x.categoria === d.cat && normalizar(x.variante) === normalizar(nombre));
    return p ? `/catalogo/${p.categoria}/${p.slug}` : `/catalogo/${d.cat}`;
  }
  if (nombre === 'Limpiadores') return `/catalogo/${d.cat}`;
  const valor = equivalencias[nombre] ?? nombre.replace(/^Colección\s+/, '');
  return `/catalogo/${d.cat}?${d.campo}=${encodeURIComponent(valor)}`;
};

menu.forEach((item) => {
  (item as any).verTodo = `/catalogo#${item.label.toLowerCase()}`;
  item.groups.forEach((group) => {
    // El título del grupo lleva a la página de la línea cuando existe (alfombras, deck); si no, a su catálogo
    const cat = destinos[group.title]?.cat ?? '';
    (group as any).href = paginasLinea[cat]?.href ?? `/catalogo/${cat}`;
    group.items.forEach((it: any) => { it.href = hrefColeccion(group.title, it.name); });
  });
});
