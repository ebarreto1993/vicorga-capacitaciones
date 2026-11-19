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

function createPage(id, title, layout) {
  const page = cloneTemplate('magazine-page-template');
  page.id = id;
  if (layout.clase) page.classList.add(layout.clase);
  page.setAttribute('aria-labelledby', id + '-title');
  const heading = page.querySelector('h2');
  heading.id = id + '-title';
  heading.textContent = title;
  page.querySelector('.magazine-page-photo').src = layout.imagen;
  if (layout.marcaAgua) addWatermark(page);
  if (layout.segundaImagen) {
    const secondImage = page.querySelector('.magazine-page-photo').cloneNode();
    secondImage.classList.add('magazine-page-photo-second');
    secondImage.src = layout.segundaImagen;
    page.append(secondImage);
  }
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
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'magazine-video-toggle';
  toggle.setAttribute('aria-controls', id);
  toggle.textContent = 'Pausar video';
  video.addEventListener('play', () => { toggle.textContent = 'Pausar video'; });
  video.addEventListener('pause', () => { toggle.textContent = 'Reproducir video'; });
  function play() {
    video.play().catch(() => { toggle.textContent = 'Reproducir video'; });
  }
  toggle.addEventListener('click', () => {
    if (video.paused) play();
    else video.pause();
  });
  frame.append(video);
  copy.append(frame, toggle);
  play();
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

course.modulos.forEach((module, index) => {
  const layout = {
    imagen: magazine.portada.imagen,
    clase: index % 2 === 0 ? 'page-text-left' : '',
    ...magazine.modulos?.[index]
  };
  const page = createPage('modulo-' + module.numero, 'MÓDULO ' + Number(module.numero), layout);
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

if (course.videoId) {
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
investment.querySelector('.magazine-page-photo').src = magazine.imagenInversion || magazine.portada.imagen;
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
