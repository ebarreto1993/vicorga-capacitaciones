const groups={cosmiatria:"cosmiatria","maestria-belleza":"belleza",maquillaje:"belleza",unas:"belleza",lashista:"belleza",micropigmentacion:"belleza",barberia:"barberia",tatuajes:"arte"};
const labels={belleza:'Belleza',barberia:'Barbería',cosmiatria:'Cosmiatría',arte:'Arte corporal'};
const cardImages={cosmiatria:'assets/photos/cosmetologia.jpg',maquillaje:'assets/images/maquillaje.jpeg',barberia:'assets/images/barberia.jpeg',unas:'assets/images/uñas.jpeg',lashista:'assets/images/lashista.jpeg',micropigmentacion:'assets/images/micropigmentacion.jpeg','maestria-belleza':'assets/images/belleza.jpeg',tatuajes:'assets/photos/tatuajes.jpg'};
const order=['maestria-belleza','unas','lashista','barberia','maquillaje','micropigmentacion','cosmiatria','tatuajes'];
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',open);nav.classList.toggle('open',open)});
nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
const grid=document.getElementById('course-grid');
if(grid){function render(filter='todos'){const keys=order.filter(k=>filter==='todos'||groups[k]===filter);grid.innerHTML=keys.map(k=>{const c=carreras[k];return `<article class="course-card"><a class="card-photo" style="display:block" href="curso.html?carrera=${k}" aria-label="Ver carrera de ${c.nombre}"><img src="${cardImages[k]}" alt="Formación de ${c.nombre}" loading="lazy"><span class="badge">${labels[groups[k]].toUpperCase()}</span></a><div class="card-content"><h3>${c.nombre}</h3><p>${c.duracion} · Presencial</p><a href="curso.html?carrera=${k}">Ver curso ↗</a></div></article>`}).join('');document.querySelector('.result-count').textContent=`${keys.length} ${keys.length===1?'carrera disponible':'carreras disponibles'}`;}render();document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',x===b)});render(b.dataset.filter)}));}
if(document.getElementById('course-title')){const requested=new URLSearchParams(location.search).get('carrera')||'maquillaje';const courseId=requested==='cosmetologia'?'cosmiatria':requested;const key=Object.hasOwn(carreras,courseId)?courseId:'maquillaje';const c=carreras[key];
 const videoSection = document.getElementById('course-video');
 if (/^[a-zA-Z0-9_-]{11}$/.test(c.videoId)) {
   const player = document.createElement('iframe');
   player.title = 'Video de ' + c.nombre;
   player.loading = 'lazy';
   player.allowFullscreen = true;
   player.referrerPolicy = 'strict-origin-when-cross-origin';
   player.src = 'https://www.youtube-nocookie.com/embed/' + c.videoId;
   videoSection.append(player);
   videoSection.hidden = false;
 }
 document.title=`${c.nombre} · Vicorga Capacitaciones`;document.getElementById('crumb').textContent=c.nombre;document.getElementById('course-badge').textContent=`${labels[groups[key]].toUpperCase()} · PRESENCIAL`;document.getElementById('course-title').textContent=c.nombre;document.getElementById('course-description').textContent=c.descripcion;const img=document.getElementById('course-image');img.src=cardImages[key];img.alt=`Formación profesional de ${c.nombre}`;document.getElementById('course-meta').innerHTML=`<span>◷ ${c.duracion}</span><span>◇ ${c.modulos.length} módulos</span>`;document.getElementById('achievements').innerHTML=c.modulos.slice(0,4).map(m=>`<li>${m.temas.slice(0,2).join(' y ')}.</li>`).join('');document.getElementById('modules').innerHTML=c.modulos.map((m,i)=>`<details ${i===0?'open':''}><summary><b>${m.numero}</b>${m.nombre}</summary><ul>${m.temas.map(t=>`<li>${t}</li>`).join('')}</ul></details>`).join('');document.getElementById('includes').innerHTML=c.incluye.map(t=>`<li>${t}</li>`).join('');const pensiones = c.mensualidadEntreSemana
 ? `$${c.mensualidad}<span> / mes (solo sábados)</span><br>$${c.mensualidadEntreSemana}<span> / mes (días de semana)</span>`
 : `$${c.mensualidad}<span> / mes</span>`;
document.getElementById('price').innerHTML=`${pensiones}<small>Matrícula: $${c.matricula}</small>`;document.getElementById('duration').textContent=c.duracion;document.getElementById('request-info').href=`https://wa.me/593969124761?text=${encodeURIComponent(`Hola, me interesa la carrera de ${c.nombre}. Quisiera confirmar próxima fecha, horarios, inversión y disponibilidad.`)}`;}
const heroCarousel=document.querySelector('.hero-carousel');
if(heroCarousel){
 const slides=[...heroCarousel.querySelectorAll('.hero-slide')];
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 let current=0,timer=null,hovered=false;
 function showNext(){current=(current+1)%slides.length;slides.forEach((slide,i)=>{slide.classList.toggle('is-active',i===current);slide.setAttribute('aria-hidden',String(i!==current));});slides[(current+1)%slides.length].loading='eager';}
 function schedule(){clearInterval(timer);timer=null;if(!reduced.matches&&!hovered&&!document.hidden)timer=setInterval(showNext,3000);}
 heroCarousel.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse'){hovered=true;schedule();}});
 heroCarousel.addEventListener('pointerleave',()=>{hovered=false;schedule();});
 document.addEventListener('visibilitychange',schedule);
 reduced.addEventListener('change',schedule);
 schedule();
}
