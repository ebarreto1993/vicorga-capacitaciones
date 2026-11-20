import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const siteUrl = 'https://vcapacitaciones.vercel.app';
const courses = {
  'maestria-belleza': {
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
    description: 'Carrera de lashista profesional: diseño de mirada, extensiones de pestañas y práctica especializada.',
    image: 'assets/images/lashista.jpeg', width: 736, height: 981
  },
  barberia: {
    title: 'Barbería',
    description: 'Carrera profesional de barbería: cortes modernos, técnicas de barba, herramientas y servicio profesional.',
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
const staticLink = slug => `${slug}.html`;

function addFavicon(html) {
  if (html.includes('rel="icon"')) return html;
  return html.replace('<meta name="theme-color"', '<link rel="icon" type="image/jpeg" href="assets/images/logo_para_redes.jpg">\n  <link rel="apple-touch-icon" href="assets/images/logo_para_redes.jpg">\n  <meta name="theme-color"');
}

function replaceCourseLinks(html) {
  for (const slug of Object.keys(courses)) {
    html = html.replaceAll(`curso.html?carrera=${slug}`, staticLink(slug));
  }
  return html;
}

function coursePage(template, slug, course) {
  const title = `${course.title} · Vicorga Capacitaciones`;
  const url = `${siteUrl}/${slug}.html`;
  const image = new URL(course.image, `${siteUrl}/`).href;
  let html = addFavicon(replaceCourseLinks(template));
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeAttribute(course.description)}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escapeAttribute(title)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escapeAttribute(course.description)}">`);
  html = html.replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${image}">`);
  html = html.replace(/<meta property="og:image:secure_url" content="[^"]*">/, `<meta property="og:image:secure_url" content="${image}">`);
  html = html.replace(/<meta property="og:image:width" content="[^"]*">/, `<meta property="og:image:width" content="${course.width}">`);
  html = html.replace(/<meta property="og:image:height" content="[^"]*">/, `<meta property="og:image:height" content="${course.height}">`);
  html = html.replace(/<meta property="og:image:alt" content="[^"]*">/, `<meta property="og:image:alt" content="${escapeAttribute(course.title)} · Vicorga Capacitaciones">`);
  html = html.replace('<meta name="twitter:card"', `<meta property="og:url" content="${url}">\n  <link rel="canonical" href="${url}">\n  <meta name="twitter:card"`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${escapeAttribute(title)}">`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${escapeAttribute(course.description)}">`);
  html = html.replace(/<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${image}">`);
  html = html.replace(/<meta name="twitter:image:alt" content="[^"]*">/, `<meta name="twitter:image:alt" content="${escapeAttribute(course.title)} · Vicorga Capacitaciones">`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
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
  await writeFile(resolve(root, `${slug}.html`), html);
  await writeFile(resolve(root, 'dist', `${slug}.html`), html);
}

console.log(`Generated ${Object.keys(courses).length} course pages in source and dist.`);
