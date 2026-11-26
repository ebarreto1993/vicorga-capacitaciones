const groups={cosmiatria:"cosmiatria","maestria-belleza":"belleza",maquillaje:"belleza",unas:"belleza",lashista:"belleza",micropigmentacion:"belleza",barberia:"barberia",tatuajes:"arte"};
const labels={belleza:'Belleza',barberia:'Barbería',cosmiatria:'Cosmiatría',arte:'Arte corporal'};
const cardImages={cosmiatria:'assets/photos/cosmetologia.jpg',maquillaje:'assets/images/maquillaje.jpeg',barberia:'assets/images/barberia.jpeg',unas:'assets/images/uñas.jpeg',lashista:'assets/images/lashista.jpeg',micropigmentacion:'assets/images/micropigmentacion.jpeg','maestria-belleza':'assets/images/belleza.jpeg',tatuajes:'assets/photos/tatuajes.jpg'};
const coursePageSlugs={'maestria-belleza':'maestra-belleza',cosmiatria:'carrera-cosmiatria'};
const order=['maestria-belleza','unas','cosmiatria','lashista','barberia','maquillaje','micropigmentacion'];
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',open);nav.classList.toggle('open',open)});
nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
const grid=document.getElementById('course-grid');
if(grid){function render(){const keys=order;grid.innerHTML=keys.map(k=>{const c=carreras[k],slug=coursePageSlugs[k]||k;return `<article class="course-card"><a class="card-photo" style="display:block" href="${slug}.html" aria-label="Ver carrera de ${c.nombre}"><img src="${cardImages[k]}" alt="Formación de ${c.nombre}" loading="lazy"><span class="badge">${labels[groups[k]].toUpperCase()}</span></a><div class="card-content"><h3>${c.nombre}</h3><p>${c.duracion} · Presencial</p><a href="${slug}.html">Ver curso ↗</a></div></article>`}).join('');}render();}
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
