'use strict';

const coursePhotos = {
  'maestria-belleza': 'assets/images/belleza.jpeg',
  unas: 'assets/images/uñas.jpeg',
  lashista: 'assets/images/lashista.jpeg',
  barberia: 'assets/images/barberia.jpeg',
  maquillaje: 'assets/images/maquillaje.jpeg',
  micropigmentacion: 'assets/images/micropigmentacion.jpeg',
  cosmiatria: 'assets/photos/cosmetologia.jpg',
  tatuajes: 'assets/photos/tatuajes.jpg'
};

const beautyModulePhotos = [
  coursePhotos.unas, coursePhotos.cosmiatria, coursePhotos.maquillaje,
  coursePhotos.lashista, coursePhotos['maestria-belleza'],
  coursePhotos['maestria-belleza'], coursePhotos['maestria-belleza'],
  coursePhotos.cosmiatria, coursePhotos.barberia, coursePhotos['maestria-belleza']
];

const requestedCourse = new URLSearchParams(location.search).get('carrera');
const courseId = requestedCourse === 'cosmetologia' ? 'cosmiatria' : requestedCourse;
const courseKey = Object.hasOwn(carreras, courseId) ? courseId : 'maquillaje';
const course = carreras[courseKey];
const get = id => document.getElementById(id);

document.title = course.nombre + ' · Vicorga Capacitaciones';
get('course-title').textContent = course.nombre;
get('course-description').textContent = course.descripcion;
get('module-count').textContent = course.modulos.length + ' módulos';
get('course-image').src = coursePhotos[courseKey];
get('course-image').alt = 'Formación en ' + course.nombre;
get('formation-image').src = coursePhotos[courseKey];
get('formation-image').alt = 'Práctica de ' + course.nombre;
get('duration').textContent = course.duracion;

if (courseKey === 'unas') {
  document.body.classList.add('nails-magazine');
  const cover = get('nails-cover-template').content.cloneNode(true);
  document.querySelector('.catalog-cover').replaceWith(cover);
  const back = document.createElement('a');
  back.href = 'index.html#cursos';
  back.textContent = '← Carreras';
  document.querySelector('.catalog-nav .wrap').prepend(back);
}

course.modulos.forEach((module, index) => {
  const card = document.createElement('article');
  card.className = 'module-card';
  card.id = 'modulo-' + module.numero;
  const titleId = card.id + '-title';
  card.setAttribute('aria-labelledby', titleId);
  const image = document.createElement('img');
  image.src = courseKey === 'maestria-belleza' ? beautyModulePhotos[index] : coursePhotos[courseKey];
  image.alt = '';
  image.loading = 'lazy';
  // Vary the framing while keeping the academy's actual photographs.
  image.style.objectPosition = ['center 30%', 'center 50%', 'center 65%'][index % 3];
  const number = document.createElement('p');
  number.className = 'module-number';
  number.textContent = 'MÓDULO ' + module.numero;
  const title = document.createElement('h3');
  title.id = titleId;
  title.textContent = module.nombre;
  const list = document.createElement('ul');
  list.className = 'module-topics';
  module.temas.forEach(topic => {
    const item = document.createElement('li');
    item.textContent = topic;
    list.append(item);
  });
  card.append(image, number, title, list);
  get('modules').append(card);
  const option = document.createElement('option');
  option.value = card.id;
  option.textContent = module.numero + ' · ' + module.nombre;
  get('module-select').append(option);
});

get('module-select').addEventListener('change', event => {
  const target = get(event.target.value);
  if (target) {
    target.tabIndex = -1;
    target.focus({ preventScroll: true });
    location.hash = target.id;
  }
});

course.incluye.forEach(text => {
  const item = document.createElement('li');
  item.textContent = text;
  get('includes').append(item);
});

function addPrice(amount, label) {
  const option = document.createElement('div');
  option.className = 'price-option';
  const value = document.createElement('p');
  value.className = 'price-value';
  value.textContent = '$' + amount;
  const period = document.createElement('small');
  period.textContent = ' / mes';
  value.append(period);
  option.append(value);
  if (label) {
    const caption = document.createElement('span');
    caption.className = 'price-label';
    caption.textContent = label;
    option.append(caption);
  }
  get('price').append(option);
}

addPrice(course.mensualidad, course.mensualidadEntreSemana ? 'Sábados intensivos' : '');
if (course.mensualidadEntreSemana) {
  addPrice(course.mensualidadEntreSemana, 'Dos veces a la semana intensivo');
}
const enrollment = document.createElement('p');
enrollment.className = 'enrollment';
enrollment.textContent = 'Matrícula: $' + course.matricula;
get('price').append(enrollment);

document.querySelectorAll('[data-contact]').forEach(link => {
  const message = link.hasAttribute('data-dates')
    ? 'Hola, quisiera consultar las próximas fechas y horarios de ' + course.nombre + '.'
    : 'Hola, me interesa la carrera de ' + course.nombre + '. Quisiera información sobre el pénsum, horarios, inversión y cupos.';
  link.href = 'https://wa.me/593969124761?text=' + encodeURIComponent(message);
});

if (/^[a-zA-Z0-9_-]{11}$/.test(course.videoId) && !course.videoId.startsWith('dummy')) {
  const video = document.createElement('iframe');
  video.title = 'Video de ' + course.nombre;
  video.src = 'https://www.youtube-nocookie.com/embed/' + course.videoId;
  video.loading = 'lazy';
  video.allowFullscreen = true;
  video.referrerPolicy = 'strict-origin-when-cross-origin';
  get('course-video').append(video);
  get('course-video').hidden = false;
  get('formation-visual').classList.add('has-video');
}
