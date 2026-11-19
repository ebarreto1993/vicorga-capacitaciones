'use strict';

const requestedCourse = new URLSearchParams(location.search).get('carrera');
const legacyCourse = requestedCourse === 'cosmetologia' ? 'cosmiatria' : requestedCourse;
const courseKey = Object.hasOwn(carreras, legacyCourse) ? legacyCourse : 'maquillaje';
const course = carreras[courseKey];
const magazine = revistas[courseKey];
const content = document.getElementById('magazine-content');
const watermarkPhoto = 'assets/images/modulo_uñas/vc_transparencia.png';

function cloneTemplate(id) {
  return document.getElementById(id).content.firstElementChild.cloneNode(true);
}

function addItems(list, items) {
  items.forEach(text => {
    const item = document.createElement('li');
    item.textContent = text;
    list.append(item);
  });
}

function addWatermark(page) {
  const image = document.createElement('img');
  image.className = 'magazine-page-watermark';
  image.src = watermarkPhoto;
  image.alt = '';
  image.loading = 'lazy';
  page.append(image);
}

function addMediaBubbles(page, items, id) {
  if (!items?.length) return;
  const group = document.createElement('div');
  group.className = 'magazine-media-bubbles';
  items.forEach((item, index) => {
    const frame = document.createElement('div');
    frame.className = 'magazine-media-bubble' + (item.clase ? ' ' + item.clase : '');
    let media;
    if (item.video) {
      media = document.createElement('video');
      media.src = item.video;
      if (item.poster) media.poster = item.poster;
      media.autoplay = true;
      media.defaultMuted = true;
      media.muted = true;
      media.loop = true;
      media.playsInline = true;
      media.preload = 'metadata';
      media.setAttribute('aria-label', 'Demostración práctica de ' + course.nombre);
    } else {
      media = document.createElement('img');
      media.src = item.imagen;
      media.alt = '';
      media.loading = 'lazy';
    }
    media.id = id + '-media-' + (index + 1);
    frame.append(media);
    group.append(frame);
    if (media instanceof HTMLVideoElement) media.play().catch(() => {});
  });
  page.append(group);
}

function createPage(id, title, layout) {
  const page = cloneTemplate('magazine-page-template');
  page.id = id;
  if (layout.clase) page.classList.add(...layout.clase.split(/\s+/).filter(Boolean));
  page.setAttribute('aria-labelledby', id + '-title');
  const heading = page.querySelector('h2');
  heading.id = id + '-title';
  heading.textContent = title;
  const primaryImage = page.querySelector('.magazine-page-photo');
  if (layout.videoFondo) {
    const video = document.createElement('video');
    video.className = primaryImage.className + ' magazine-page-video';
    video.src = layout.videoFondo;
    if (layout.poster) video.poster = layout.poster;
    video.autoplay = true;
    video.defaultMuted = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', 'Demostración práctica de ' + course.nombre);
    primaryImage.replaceWith(video);
    video.play().catch(() => {});
  } else {
    primaryImage.src = layout.imagen;
  }
  if (layout.marcaAgua) addWatermark(page);
  if (layout.segundaImagen) {
    const secondImage = document.createElement('img');
    secondImage.className = 'magazine-page-photo magazine-page-photo-second';
    secondImage.src = layout.segundaImagen;
    secondImage.alt = '';
    secondImage.loading = 'lazy';
    page.append(secondImage);
  }
  addMediaBubbles(page, layout.burbujas, id);
  return page;
}

function addLoopVideo(copy, source, poster, id) {
  const frame = document.createElement('div');
  frame.className = 'magazine-video-circle';
  const video = document.createElement('video');
  video.id = id;
  video.src = source;
  video.poster = poster;
  video.autoplay = true;
  video.defaultMuted = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = 'metadata';
  video.setAttribute('aria-label', 'Demostración práctica de ' + course.nombre);
  frame.append(video);
  copy.append(frame);
  video.play().catch(() => {});
}

document.title = course.nombre + ' · Vicorga Capacitaciones';
const cover = cloneTemplate(magazine.portada.plantilla || 'magazine-cover-template');
if (!magazine.portada.plantilla) {
  cover.querySelector('h1').textContent = course.nombre;
  cover.querySelector('.magazine-cover-photo').src = magazine.portada.imagen;
  cover.querySelector('.magazine-cover-description').textContent = course.descripcion;
  cover.querySelector('.magazine-cover-duration').textContent = course.duracion;
}
content.append(cover);

const pages = document.createElement('div');
pages.id = 'pensum';
content.append(pages);

if (magazine.introduccion) {
  const intro = magazine.introduccion;
  const page = createPage('presentacion', intro.titulo, {
    imagen: intro.imagen,
    clase: 'nails-audience',
    marcaAgua: intro.marcaAgua
  });
  const text = document.createElement('p');
  text.textContent = intro.texto;
  page.querySelector('.magazine-page-copy').append(text);
  pages.append(page);
}

(magazine.paginasPrevias || []).forEach((intro, index) => {
  const page = createPage(intro.id || 'presentacion-' + (index + 1), intro.titulo, intro);
  const text = document.createElement('p');
  text.textContent = intro.texto;
  page.querySelector('.magazine-page-copy').append(text);
  pages.append(page);
});

course.modulos.forEach((module, index) => {
  const layout = {
    imagen: magazine.portada.imagen,
    clase: index % 2 === 0 ? 'page-text-left' : '',
    ...magazine.modulos?.[index]
  };
  const page = createPage('modulo-' + module.numero, layout.titulo || 'MÓDULO ' + Number(module.numero), layout);
  const copy = page.querySelector('.magazine-page-copy');
  if (!magazine.portada.plantilla) {
    const name = document.createElement('p');
    name.className = 'magazine-module-name';
    name.textContent = module.nombre;
    copy.append(name);
  }
  const topics = document.createElement('ol');
  addItems(topics, module.temas);
  copy.append(topics);
  pages.append(page);
  if (layout.video) addLoopVideo(copy, layout.video, layout.imagen, 'video-modulo-' + module.numero);
});

if (magazine.examen) {
  const exam = document.createElement('section');
  exam.className = 'magazine-page nails-exam';
  exam.setAttribute('aria-labelledby', 'exam-title');
  magazine.examen.imagenes.forEach((photo, index) => {
    const image = document.createElement('img');
    image.className = 'magazine-page-photo';
    if (index > 0) image.classList.add('magazine-page-photo-second');
    image.src = photo;
    image.alt = magazine.examen.descripciones[index];
    image.loading = 'lazy';
    exam.append(image);
  });
  const heading = document.createElement('h2');
  heading.id = 'exam-title';
  heading.textContent = 'EXAMEN FINAL';
  exam.append(heading);
  pages.append(exam);
}

if (course.videoId && !magazine.ocultarVideoExterno) {
  const videoSection = document.createElement('section');
  videoSection.className = 'magazine-course-video';
  videoSection.setAttribute('aria-label', 'Video de ' + course.nombre);
  const player = document.createElement('iframe');
  player.title = 'Video de ' + course.nombre;
  player.src = 'https://www.youtube-nocookie.com/embed/' + course.videoId;
  player.loading = 'lazy';
  player.allowFullscreen = true;
  player.referrerPolicy = 'strict-origin-when-cross-origin';
  videoSection.append(player);
  content.append(videoSection);
}

const investment = cloneTemplate('magazine-investment-template');
const investmentPhoto = investment.querySelector('.magazine-page-photo');
if (magazine.videoInversion) {
  const investmentVideo = document.createElement('video');
  investmentVideo.className = investmentPhoto.className + ' magazine-page-video';
  investmentVideo.src = magazine.videoInversion;
  if (magazine.imagenInversion) investmentVideo.poster = magazine.imagenInversion;
  investmentVideo.autoplay = true;
  investmentVideo.defaultMuted = true;
  investmentVideo.muted = true;
  investmentVideo.loop = true;
  investmentVideo.playsInline = true;
  investmentVideo.preload = 'metadata';
  investmentVideo.setAttribute('aria-label', 'Instalaciones de ' + course.nombre);
  investmentPhoto.replaceWith(investmentVideo);
  investmentVideo.play().catch(() => {});
} else {
  investmentPhoto.src = magazine.imagenInversion || magazine.portada.imagen;
}
investment.querySelector('.investment-duration').textContent =
  'NUESTRA CARRERA TIENE UNA DURACIÓN DE ' + course.duracion.toLocaleUpperCase('es');
const values = ['MATRÍCULA: $' + course.matricula];
if (course.mensualidadEntreSemana) {
  values.push('MENSUALIDAD: $' + course.mensualidad + ' (SÁBADOS INTENSIVOS)');
  values.push('MENSUALIDAD: $' + course.mensualidadEntreSemana + ' (DOS VECES A LA SEMANA INTENSIVO)');
} else {
  values.push('MENSUALIDAD: $' + course.mensualidad);
}
addItems(investment.querySelector('.investment-values'), values);
addItems(investment.querySelector('.investment-includes'), course.incluye.map(text => text.toLocaleUpperCase('es')));
investment.querySelector('.exam-note').textContent =
  magazine.notaExamen || 'EXAMEN FINAL OBLIGATORIO PARA RECIBIR TU CERTIFICACIÓN.';
content.append(investment);

document.querySelectorAll('[data-contact]').forEach(link => {
  link.href = 'https://wa.me/593969124761?text=' + encodeURIComponent(
    'Hola, me interesa la carrera de ' + course.nombre + '. Quisiera información sobre el pénsum, horarios, inversión y cupos.'
  );
});
