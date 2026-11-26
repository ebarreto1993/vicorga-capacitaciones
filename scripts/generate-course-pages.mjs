import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const siteUrl = 'https://vcapacitaciones.vercel.app';
const courses = {
  'maestra-belleza': {
    title: 'Maestra en Belleza',
    description: 'Carrera profesional integral de belleza: peinados, cortes, tratamientos, maquillaje, uñas, barbería y colorimetría.',
    image: 'assets/images/belleza.jpeg', width: 2714, height: 3618
  },
  unas: {
    title: 'Técnica profesional en uñas',
    description: 'Aprende manicura, pedicura y técnicas profesionales de aplicación y diseño de uñas en Vicorga Capacitaciones.',
    image: 'assets/images/uñas.jpeg', width: 3024, height: 4032
  },
  lashista: {
    title: 'Lashista',
    description: 'Lash Artist: formación en cejas, lifting y extensiones de pestañas, con prácticas en modelos reales.',
    image: 'assets/images/lashista.jpeg', width: 736, height: 981
  },
  barberia: {
    title: 'Barbería',
    description: 'Técnico profesional en barbería: cuatro módulos de corte, barba y colorimetría en cuatro meses.',
    image: 'assets/images/barberia.jpeg', width: 1200, height: 1600
  },
  maquillaje: {
    title: 'Maquillaje',
    description: 'Carrera de maquillaje profesional: técnicas de día, noche, novia, maquillaje artístico y preparación de la piel.',
    image: 'assets/images/maquillaje.jpeg', width: 3024, height: 4032
  },
  micropigmentacion: {
    title: 'Micropigmentación',
    description: 'Carrera de micropigmentación facial: diseño de cejas, labios, delineado y técnicas profesionales de precisión.',
    image: 'assets/images/micropigmentacion.jpeg', width: 2773, height: 4160
  },
  tatuajes: {
    title: 'Tatuajes',
    description: 'Carrera profesional de tatuajes: diseño, técnicas de línea y sombreado, higiene y prácticas profesionales.',
    image: 'assets/photos/tatuajes.jpg', width: 900, height: 600
  },
  cosmiatria: {
    title: 'Cosmiatría',
    description: 'Carrera de cosmiatría: ciencias cosméticas, tratamientos estéticos, cuidado de la piel y práctica profesional.',
    image: 'assets/photos/cosmetologia.jpg', width: 900, height: 1350
  }
};

const escapeAttribute = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
const staticLink = slug => slug === 'cosmiatria' ? 'carrera-cosmiatria.html' : `${slug}.html`;

function addFavicon(html) {
  if (html.includes('rel="icon"')) return html;
  return html.replace('<meta name="theme-color"', '<link rel="icon" type="image/jpeg" href="assets/images/logo_para_redes.jpg">\n  <link rel="apple-touch-icon" href="assets/images/logo_para_redes.jpg">\n  <meta name="theme-color"');
}

function replaceCourseLinks(html) {
  html = html.replaceAll('curso.html?carrera=maestria-belleza', 'maestra-belleza.html');
  html = html.replaceAll('maestria-belleza.html', 'maestra-belleza.html');
  for (const slug of Object.keys(courses)) {
    html = html.replaceAll(`curso.html?carrera=${slug}`, staticLink(slug));
  }
  return html;
}

function coursePage(template, slug, course) {
  const title = `${course.title} · Vicorga Capacitaciones`;
  const url = `${siteUrl}/${staticLink(slug)}`;
  const image = `${siteUrl}/assets/images/logo_para_redes.jpg`;
  let html = addFavicon(replaceCourseLinks(template));
  if (slug === 'lashista') {
    html = html.replace('assets/images/modulo_uñas/m10/m10.jpeg', 'assets/images/modulo_lahista/metodo_de_pago.jpeg');
  }
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeAttribute(course.description)}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escapeAttribute(title)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escapeAttribute(course.description)}">`);
  html = html.replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${image}">`);
  html = html.replace(/<meta property="og:image:secure_url" content="[^"]*">/, `<meta property="og:image:secure_url" content="${image}">`);
  html = html.replace(/<meta property="og:image:width" content="[^"]*">/, '<meta property="og:image:width" content="2048">');
  html = html.replace(/<meta property="og:image:height" content="[^"]*">/, '<meta property="og:image:height" content="2048">');
  html = html.replace(/<meta property="og:image:alt" content="[^"]*">/, '<meta property="og:image:alt" content="Logo de Vicorga Capacitaciones sobre fondo negro">');
  html = html.replace('<meta name="twitter:card"', `<meta property="og:url" content="${url}">\n  <link rel="canonical" href="${url}">\n  <meta name="twitter:card"`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${escapeAttribute(title)}">`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${escapeAttribute(course.description)}">`);
  html = html.replace(/<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${image}">`);
  html = html.replace(/<meta name="twitter:image:alt" content="[^"]*">/, '<meta name="twitter:image:alt" content="Logo de Vicorga Capacitaciones sobre fondo negro">');
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  if (slug === 'lashista') {
    html = html.replace(/css\/revista\.css\?v=[^" ]+/, 'css/revista.css?v=20261124-23');
    html = html.replace(/js\/datos-carreras\.js\?v=[^" ]+/, 'js/datos-carreras.js?v=20261124-12');
    html = html.replace(/js\/datos-revistas\.js\?v=[^" ]+/, 'js/datos-revistas.js?v=20261124-16');
    html = html.replace(/js\/catalogo\.js\?v=[^" ]+/, 'js/catalogo.js?v=20261124-9');
  }
  return html;
}

const sourceTemplate = await readFile(resolve(root, 'curso.html'), 'utf8');
const sourceIndex = addFavicon(replaceCourseLinks(await readFile(resolve(root, 'index.html'), 'utf8')));
await writeFile(resolve(root, 'index.html'), sourceIndex);
await writeFile(resolve(root, 'curso.html'), addFavicon(replaceCourseLinks(sourceTemplate)));

await mkdir(resolve(root, 'dist'), { recursive: true });
await writeFile(resolve(root, 'dist/index.html'), sourceIndex);
await writeFile(resolve(root, 'dist/curso.html'), addFavicon(replaceCourseLinks(sourceTemplate)));

for (const [slug, course] of Object.entries(courses)) {
  const html = coursePage(sourceTemplate, slug, course);
  await writeFile(resolve(root, staticLink(slug)), html);
  await writeFile(resolve(root, 'dist', staticLink(slug)), html);
}

console.log(`Generated ${Object.keys(courses).length} course pages in source and dist.`);
